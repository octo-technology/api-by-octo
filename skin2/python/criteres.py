import pandas as pd
import json
from pathlib import Path

# ──────────────────────────────────────────────────────────────
# 1) Localisation et lecture du fichier (délimiteur auto)
# ──────────────────────────────────────────────────────────────
DATA_PATH = Path("benchmark.csv")           # ← nom de ton fichier
ENCODING  = "utf-8"                      # ajuste si besoin
DECIMALS  = 0                            # 0 ⇒ note entière sur 5

if not DATA_PATH.exists():
    raise FileNotFoundError(f"{DATA_PATH} introuvable")

df = pd.read_csv(DATA_PATH, sep=None, engine="python", encoding=ENCODING)

# ──────────────────────────────────────────────────────────────
# 2) Normalisation des en-têtes
# ──────────────────────────────────────────────────────────────
df.columns = (
    df.columns.str.strip()                          # espaces
              .str.replace("\ufeff", "", regex=False)  # BOM éventuel
              .str.replace("Reponse", "Réponse", regex=False)
              .str.replace("Response", "Réponse", regex=False)
              .str.replace("Critere", "Critère", regex=False)
)

required = ["Outil", "Critère", "Réponse"]
missing  = [c for c in required if c not in df.columns]
if missing:
    raise ValueError(f"Colonnes manquantes : {missing}\nPrésentes : {list(df.columns)}")

# ──────────────────────────────────────────────────────────────
# 3) Mapping Oui / Partiel / Non → score 0-1
# ──────────────────────────────────────────────────────────────
def convert_response_to_score(resp: str | float | None) -> float | None:
    """Transforme 'Oui', 'Partiel', 'Non' (insensibles à la casse) en 1, 0.5, 0."""
    if not isinstance(resp, str):
        return None
    resp = resp.strip().lower()
    if resp.startswith("oui"):
        return 1
    if resp.startswith("part"):
        return 0.5
    if resp.startswith("non"):
        return 0
    return None                     # valeur inattendue → None

df["Score"] = df["Réponse"].apply(convert_response_to_score)

# ──────────────────────────────────────────────────────────────
# 4) Agrégation → note sur 5 par critère et par outil
# ──────────────────────────────────────────────────────────────
def note_moyenne(scores):
    return round(scores.mean() * 5, DECIMALS)

notes = (
    df.groupby(["Outil", "Critère"])["Score"]
      .apply(note_moyenne)
      .unstack(fill_value=0)        # colonnes = critères, lignes = outils
      .sort_index()
)

# ──────────────────────────────────────────────────────────────
# 5) Export JSON compatible front
# ──────────────────────────────────────────────────────────────
conf_apims_notes = notes.astype(int).to_dict(orient="index")
json_str = "let conf_apims_notes = " + json.dumps(conf_apims_notes, ensure_ascii=False, indent=4) + ";"

print(json_str)                                    # console
Path("skin2/js/conf_apims_notes.js").write_text(json_str, encoding="utf-8")