let conf_apims_notes = {
    "Apigee": {
        "API Gateway": 4,
        "API Lifecycle": 3,
        "Auth & Sécurité": 4,
        "Developer Portal": 4,
        "Extensibilité & Plugins": 4,
        "Monitoring & Observabilité": 3,
        "Monétisation": 4,
        "Protocoles supportés": 2,
        "Transformation requêtes/réponses": 5
    },
    "Axway Amplify": {
        "API Gateway": 3,
        "API Lifecycle": 2,
        "Auth & Sécurité": 4,
        "Developer Portal": 3,
        "Extensibilité & Plugins": 3,
        "Monitoring & Observabilité": 2,
        "Monétisation": 4,
        "Protocoles supportés": 2,
        "Transformation requêtes/réponses": 5
    },
    "Gravitee": {
        "API Gateway": 5,
        "API Lifecycle": 3,
        "Auth & Sécurité": 4,
        "Developer Portal": 5,
        "Extensibilité & Plugins": 4,
        "Monitoring & Observabilité": 3,
        "Monétisation": 1,
        "Protocoles supportés": 5,
        "Transformation requêtes/réponses": 5
    },
    "Kong": {
        "API Gateway": 4,
        "API Lifecycle": 3,
        "Auth & Sécurité": 5,
        "Developer Portal": 5,
        "Extensibilité & Plugins": 5,
        "Monitoring & Observabilité": 4,
        "Monétisation": 4,
        "Protocoles supportés": 5,
        "Transformation requêtes/réponses": 4
    },
    "Tyk": {
        "API Gateway": 4,
        "API Lifecycle": 2,
        "Auth & Sécurité": 4,
        "Developer Portal": 5,
        "Extensibilité & Plugins": 3,
        "Monitoring & Observabilité": 3,
        "Monétisation": 4,
        "Protocoles supportés": 3,
        "Transformation requêtes/réponses": 5
    }
};
let conf_cms = {
    "home": {
        "header-menu-quizz-EN": "Quizz",
        "header-menu-quizz-FR": "Quizz",
        "header-menu-solutions-EN": "Solutions benchmark",
        "header-menu-solutions-FR": "Les solutions",
    "header-menu-comparateur-EN": "Comparateur",
    "header-menu-comparateur-FR": "Comparateur",
        "header-menu-publications-EN": "Publications <span class='icon icon-video-play'>",
        "header-menu-publications-FR": "Publications <span class='icon icon-video-play'>",
        "header-menu-download-EN": "Download Refcard <span class='icon icon-video-play'>",
        "header-menu-download-FR": "Télécharger la Refcard <span class='icon icon-video-play'>",
        "bloc-quizz-title-EN": "WHICH API MANAGEMENT<br/> SOLUTION CAN HELP ME?",
        "bloc-quizz-subtitle-EN": "Start the quizz!",
        "bloc-quizz-title-FR": "QUELLE SOLUTION D'API MANAGEMENT PEUT M'AIDER ?",
        "bloc-quizz-subtitle-FR": "Commencer le quizz !",
        "bloc-solutions-title-EN": "API MANAGEMENT SOLUTIONS<br/> MARKET OVERVIEW",
        "bloc-solutions-title-FR": "PANORAMA DES SOLUTIONS<br/> D'API MANAGEMENT",
        "bloc-solutions-subtitle-EN": "See the benchmark!",
        "bloc-solutions-subtitle-FR": "Consulter le benchmark",
        "bloc-solutions-button-knowmore-EN": "For more information",
        "bloc-solutions-button-knowmore-FR": "En savoir plus",
        "section-quizz-title-FR": "Solutions identifiées.",
        "section-quizz-title-EN": "Corresponding solutions.",
        "section-quizz-return-button-EN": "Back",
        "section-quizz-return-button-FR": "Étape précédente",
        "section-intro-solutions-title-EN": "OCTO and <br />API Management <br />solutions.",
        "section-intro-solutions-title-FR": "OCTO et <br />l'API Management.",
        "section-intro-solutions-subtitle-EN": "Over the years OCTO has acquired the role of opinion leader on API subjects, thanks to experience gathered by consultant teams on the field, when designing and bulding APIs.",
        "section-intro-solutions-subtitle-FR": "Si OCTO a développé au fil des ans un positionnement de leader d’opinion, c’est grâce à l'expérience de nos consultants aquise sur le terrain, avec nos clients, lors de la mise en oeuvre d'API.",
    "section-intro-comparateur-title-EN": "The API Management<br />solutions comparator.",
    "section-intro-comparateur-title-FR": "Comparateur de solutions d'API Management.",
    "section-intro-comparateur-subtitle-EN": "Compare APIM solutions on key features and quickly spot strengths and weaknesses.",
    "section-intro-comparateur-subtitle-FR": "Comparez les solutions APIM sur des fonctionnalités clés pour repérer rapidement forces et faiblesses.",
        "footer-button-legal-EN": "Legal & Privacy",
        "footer-button-legal-FR": "Legal & Privacy",
        "footer-button-press-EN": "Press",
        "footer-button-press-FR": "Presse",
        "footer-button-blog-EN": "Blog",
        "footer-button-blog-FR": "Blog",
        "footer-button-contact-EN": "Contact",
        "footer-button-contact-FR": "Contact",
        "background-image": "./skin2/img/Refcard_API_Management.jpg",
        "background-image-mobile": "./skin2/img/Refcard_API_Management_jaune_siteAPI-mobile.jpg"
    },
    "section-quizz": {
        "background-image": "./skin2/img/Refcard_open_OK_1024x620.png"
    },
    "section-intro-solutions": {
        "background-image": "./skin2/img/canard_siteAPI.png"
    }
}

let conf_quizz = {
    "quizz": {
        "ID1": {
            "question-EN": "Do I have APIs?",
            "question-FR": "Ai-je des APIs ?",
            "answers": [
                {
                    "answer-EN": "Yes",
                    "answer-FR": "Oui",
                    "goto": "2"
                },
                {
                    "answer-EN": "No",
                    "answer-FR": "Non",
                    "goto": "11"
                }
            ]
        },
        "ID11": {
            "type": "leaf",
            "fail": "NOAPIS",
            "apim": []
        },
        "ID2": {
            "question-EN": "What kind of developers do I have?",
            "question-FR": "Quel type de développeurs·euses ai-je ?",
            "answers": [
                {
                    "answer-EN": "None",
                    "answer-FR": "Aucun",
                    "goto": "21"
                },
                {
                    "answer-EN": "I have developers",
                    "answer-FR": "J'ai des développeurs·euses",
                    "goto": "22"
                },
                {
                    "answer-EN": "I have teams of developers and experts, able to build a product",
                    "answer-FR": "J'ai des équipes de développeurs·euses et des experts capables de construire un produit",
                    "goto": "23"
                }
            ]
        },
        "ID21": {
            "question-EN": "Do I have a high budget?",
            "question-FR": "Ai-je un budget conséquent ?",
            "answers": [
                {
                    "answer-EN": "No",
                    "answer-FR": "Non",
                    "goto": "31"
                },
                {
                    "answer-EN": "Yes",
                    "answer-FR": "Oui",
                    "goto": "32"
                }
            ]
        },
        "ID22": {
            "question-EN": "Do I have a high budget?",
            "question-FR": "Ai-je un budget conséquent ?",
            "answers": [
                {
                    "answer-EN": "No",
                    "answer-FR": "Non",
                    "goto": "33"
                },
                {
                    "answer-EN": "Yes",
                    "answer-FR": "Oui",
                    "goto": "34"
                }
            ]
        },
        "ID23": {
            "question-EN": "What are my time to market and customization needs?",
            "question-FR": "Quels sont mes besoins de time to market et de personnalisation ?",
            "answers": [
                {
                    "answer-EN": "Fast T2M and low customization",
                    "answer-FR": "T2M rapide et peu de personnalisation",
                    "goto": "35"
                },
                {
                    "answer-EN": "Medium T2M and medium customization",
                    "answer-FR": "T2M moyen et personnalisation moyenne",
                    "goto": "36"
                },
                {
                    "answer-EN": "Slow T2M and high customization",
                    "answer-FR": "T2M faible et personnalisation importante",
                    "goto": "37"
                }
            ]
        },
        "ID32": {
            "question-EN": "Do I have a strong and satisfying partnership with a CLOUD vendor on my Information System?",
            "question-FR": "Ai-je un partenariat fort et satisfaisant avec un éditeur CLOUD au sein de mon système d'information ?",
            "answers": [
                {
                    "answer-EN": "Yes",
                    "answer-FR": "Oui",
                    "goto": "41"
                },
                {
                    "answer-EN": "No",
                    "answer-FR": "Non",
                    "goto": "42"
                }
            ]
        },
        "ID41": {
            "question-EN": "Which vendor?",
            "question-FR": "Quel éditeur ?",
            "answers": [
                {
                    "answer-EN": "AWS",
                    "answer-FR": "AWS",
                    "goto": "66"
                },        {
                    "answer-EN": "Google",
                    "answer-FR": "Google",
                    "goto": "34"
                },
                {
                    "answer-EN": "IBM",
                    "answer-FR": "IBM",
                    "goto": "51"
                },
                {
                    "answer-EN": "Microsoft",
                    "answer-FR": "Microsoft",
                    "goto": "52"
                }
            ]
        },
        "ID42": {
            "question-EN": "Do I have an ESB satisfying me?",
            "question-FR": "Ai-je un ESB qui me satisfait ?",
            "answers": [
                {
                    "answer-EN": "Yes",
                    "answer-FR": "Oui",
                    "goto": "53"
                },
                {
                    "answer-EN": "No",
                    "answer-FR": "Non",
                    "goto": "54"
                }
            ]
        },
        "ID53": {
            "question-EN": "Which vendor?",
            "question-FR": "Quel editeur ?",
            "answers": [
                {
                    "answer-EN": "Tibco",
                    "answer-FR": "Tibco",
                    "goto": "61"
                },
                {
                    "answer-EN": "Axway",
                    "answer-FR": "Axway",
                    "goto": "62"
                },
                {
                    "answer-EN": "BROADCOM",
                    "answer-FR": "BROADCOM",
                    "goto": "63"
                },
                {
                    "answer-EN": "AG Software",
                    "answer-FR": "AG Software",
                    "goto": "64"
                },
                {
                    "answer-EN": "Mulesoft",
                    "answer-FR": "Mulesoft",
                    "goto": "65"
                }
            ]
        },
        "ID33": {
            "type": "leaf",
            "apim": [
                "WSO2"
            ]
        },
        "ID34": {
            "type": "leaf",
            "apim": [
                "APIGEE"
            ]
        },
        "ID35": {
            "type": "leaf",
            "apim": [
                "3SCALE"
            ]
        },
        "ID36": {
            "type": "leaf",
            "apim": [
                "KONG",
                "TYK",
                "GRAVITEE"
            ]
        },
        "ID37": {
            "type": "leaf",
            "fail":"DIY",
            "apim": []
        },
        "ID51": {
            "type": "leaf",
            "apim": [
                "IBM"
            ]
        },
        "ID52": {
            "type": "leaf",
            "apim": [
                "MICROSOFT"
            ]
        },
        "ID61": {
            "type": "leaf",
            "apim": [
                "TIBCO"
            ]
        },
        "ID62": {
            "type": "leaf",
            "apim": [
                "AXWAY"
            ]
        },
        "ID63": {
            "type": "leaf",
            "apim": [
                "BROADCOM"
            ]
        },
        "ID64": {
            "type": "leaf",
            "apim": [
                "AG"
            ]
        },
        "ID65": {
            "type": "leaf",
            "apim": [
                "MULESOFT"
            ]
        },
        "ID66": {
            "type": "leaf",
            "apim": [
                "AWS"
            ]
        },
        "ID54": {
            "type": "leaf",
            "fail": "RFP",
            "apim": []
        },
        "ID31": {
            "type": "leaf",
            "fail": "NODEVSNOMONEY",
            "apim": []
        }
    },
    "fails": [
        {
            "id": "NOAPIS",
            "name": "404: NO APIs FOUND",
            "description-EN": "Start doing APIs before thinking for an API Management solution :) <br/>However, tools providing a service catalogue or usage statistics may help you.",
            "description-FR": "Commencez par bâtir des APIs avant d'implémenter ou d'intégrer une solution d'API Management :) <br/>Certaines briques permettant de disposer d'un catalogue de services ou de statistiques d'usages pourraient cependant vous aider. "
        },
        {
            "id": "NODEVSNOMONEY",
            "name": "404: NO DEVELOPERS FOUND",
            "description-EN": "Current low-cost solutions require developers... You may need a bigger budget or to employ developers.",
            "description-FR": "Les solutions peu onéreuses (open source) nécessitent des développeurs·euses... Vous devez considérer un budget plus important pour les coûts de licence, ou bien employer des développeurs·euses."
        },
        {
            "id": "DIY",
            "name": "404: NO SOLUTION FOUND",
            "description-EN": "You must consider building your own API Management solution with your experts developers, to get a highly customized solution adapted to your constraints.",
            "description-FR": "Armé de développeurs·euses experts, vous devez considérer de construire votre propre solution d'API Management, adaptée à vos besoins, pour répondre à vos enjeux forts de personnalisation."
        },
        {
            "id": "RFP",
            "name": "404: NO PARTNERSHIP FOUND",
            "description-EN": "Send an RFP to vendors (Amazon API Gateway, Apigee, Axway, Broadcom, IBM, Microsoft, Mulesoft, Software AG, TIBCO Cloud™ Mashery® API Management.) or start thinking about employing developers to implement other solutions (3scale, Gravitee, Kong, Tyk or WSO2).",
            "description-FR": "Vous pouvez consulter via une RFP les éditeurs (Amazon API Gateway, Apigee, Axway, Broadcom, IBM, Microsoft, Mulesoft, Software AG, TIBCO Cloud™ Mashery® API Management.) ou bien employer des développeurs·euses pour implémenter d'autres solutions (3scale, Gravitee, Kong, Tyk ou WSO2)."
        }
    ]
}

let conf_vendorsolutions = [
    {
        "id": "3SCALE",
        "name": "3scale",
        "description-EN": "<a href=\"https://www.3scale.net/\" target=\"_blank\">3scale</a> is an hybrid platform created in 2007 that allow to manage APIs for internal or external users, to share, secure, control, and monetize APIs. The gateway is written in Lua and portals in Ruby. The solution was bought by Red Hat in 2016 and then open-sourced.",
        "description-FR": "<a href=\"https://www.3scale.net/\" target=\"_blank\">3scale</a> est une plateforme hybride créée en 2007 qui permet de manager (partager, sécuriser, contrôler et monétiser) ses APIs pour des usages internes ou externes. La gateway est écrite en Lua et les portails en Ruby. La solution a été rachetée par Red Hat en 2016 et open-sourcée.",
        "website": "https://www.3scale.net/",
        "logo": "./conf/apim/3SCALE-logo.png",
        "pros-EN": [
            "The aura/support from Red Hat",
            "Very good time to market with hybrid mode (on-premises 3scale lua gateway and SaaS developer portal and SaaS policy management in the cloud)",
            "Initially an API Management pure player: this is not the evolution of an ESB software",
            "Solution based on well documented and well designed APIs, that helps automating configuration and deployment (Devops / Infra as code)",
            "For the PRO version, a real \"on the shelf\" SaaS solution with a competitive pricing, which does not require to contact sales support to start",
            "Active community on the internet (we find anwsers on the internet to solve issues, without having to rely on vendor support)",
            "A fully <a href=\"https://github.com/3scale\" target=\"_blank\">open source</a> solution"
        ],
        "pros-FR": [
            "L’aura/le support <i>Red Hat</i> autour du produit",
            "Excellent <i>time to market</i> de la mise en œuvre avec le mode hybride (<i>gateway 3scale lua on-premises</i> et portail développeur et portail de supervision API sur le cloud en SaaS)",
            "Pure player de l'API Management (il ne s'agit pas d'une solution ESB offrant des fonctionnalités de transcodage mais de management d'API)",
            "Solution basée sur une API (API first) de très bonne qualité et bien documentée qui permet d'automatiser le paramétrage et le déploiement (DEVOPS / <i>infra as code</i>)",
            "Pour la version PRO, une véritable solution SaaS sur étagère avec un tarif compétitif, qui ne nécessite pas de contacter le service commercial pour démarrer",
            "Communauté présente sur internet (on trouve des réponses en cas de problème sans avoir à recourir au support de l'éditeur)",
            "Solution intégralement <a href=\"https://github.com/3scale\" target=\"_blank\">open source</a>"
        ],
        "cons-EN": [
            "Security is complex (require LUA programming skills and knoledge on Nginx, <a href=\"https://tools.ietf.org/html/rfc6749\" target=\"_blank\">OAuth2</a>, Open ID Connect, etc.)",
            "Strongly SaaS oriented for API portal and developer portal (if an on-premises deployment is wished for)",
            "But an increasing on-premises strategy with Red Hat who encourage to deploy OpenShift and Red Hat SSO (Keycloak)",
            "No protocol transformation features (which can be good as well) except using Red Hat FUSE (a light ESB proposed by Red Hat)",
            "No SOAP services publication features (which can be good as well to promote REST)"
        ],
        "cons-FR": [
            "Complexité de mise en œuvre de la sécurité (via LUA) qui nécessite des développeurs·euses expérimentés (Lua, Nginx, <a href=\"https://tools.ietf.org/html/rfc6749\" target=\"_blank\">OAuth2</a>, Open ID Connect, etc.)",
            "Très orientée déploiement hybride avec des portails en SaaS initialement (si un contexte on-premises est souhaité)",
            "Mais revirement on-premises de la stratégie depuis le rachat de Red Hat qui encourage à l'utilisation d'OpenShift et de Red Hat SSO (Keycloak)",
            "Pas de fonctionnalité de transcodage (ce qui peut être perçu comme un avantage) sauf si utilisé avec Red Hat FUSE (un « ESB light »  dont l'utilisation est encouragée par Red Hat)",
            "Gestion de SOAP sommaire (ce qui peut être perçue comme un avantage pour promouvoir REST)"
        ]
    },
    {
        "id": "APIGEE",
        "name": "Apigee",
        "description-EN": "<a href=\"https://cloud.google.com/apigee/?hl=en\" target=\"_blank\">Apigee</a> is a cloud-based API management platform bought by Google in 2016. It provides security and analytics for APIs.",
        "description-FR": "<a href=\"https://cloud.google.com/apigee/?hl=fr\" target=\"_blank\">Apigee</a> est une plateforme d'API management orientée cloud, permettant de sécuriser et de manager des APIs, fondée en 2004 sous le nom de Sonoa Systems. Apigee a été rachetée par Google en 2016.",
        "website": "https://cloud.google.com/apigee/?hl=en",
        "logo": "./conf/apim/apigee-logo.png",
        "pros-EN": [
            "The aura/support from Google",
            "Global vendor solution but developer-friendly (product communinity and an <a href=\"https://docs.apigee.com/\" target=\"_blank\">exhaustive documentation</a> accessible on the internet",
            "The product offers flexibility for specific needs with a low-code approach : configuration via XML policies with point & click interface",
            "Full SaaS architecture is proposed (gateway included)",
            "An API mature pure player: multi-tenant and multi-environment deployment, end-to-end monitoring, push notifications..."
        ],
        "pros-FR": [
            "L’aura/le support Google autour du produit",
            "Solution packagée mais « developer-friendly » (communauté et <a href=\"https://docs.apigee.com/\" target=\"_blank\">documentation exhaustive</a> accessible sur internet)",
            "Le produit est très flexible pour répondre à des besoins spécifiques, car il s'appuie sur un mécanisme <i>low-code</i> de paramétrage XML de policies en point & click qu'on assemble comme des LEGO®",
            "Pertinence de l'offre sur une architecture full SaaS (gateway comprise)",
            "Pure player API, avec une bonne maturité : déploiement multi-tenant et multi-environnement, monitoring de bout en bout, push notifications..."
        ],
        "cons-EN": [
            "Licence cost compared to other solutions",
            "ESB/protocol transformation features (building API facades with point & click policies) are highlighted by integrators over API management features, which imply a heavy coupling between the solution and core backend services with and a risk of vendor lock-in",
            "In the end, many features have to be implemented in the solution, such as security (<a href=\"https://tools.ietf.org/html/rfc6749\" target=\"_blank\">OAuth2</a>/<a href=\"https://openid.net/connect/\" target=\"_blank\">OIDC</a>). No real value compare to specific development that could opens up interesting opportunities such as TDD, TDR, CI/CD, etc.",
            "The offer is mainly SaaS-oriented, with full on-premises capabilities. Hybrid solution is now proppsed in Beta version.",
            "Monolithic architecture",
            "Global complexity regarding low-code policies configuration and programming that require trained Apigee developers and may raise maintainability issues (debugging, testing, etc)",
            "Not totaly a PAYG SaaS solution, ready to use on the shelf, which require to contact sales support to start",
            "A gateway managing backend data & services access is a strategic asset. Implementing its \"front door\" to access backends with a solution that complete a vast ecosystem of a cloud leader may poses a risk of dependencies on other Google offerings and cloud lock-in"
        ],
        "cons-FR": [
            "Le coût de la licence élevé par rapport aux autres solutions",
            "Marketing de l'offre et du produit très orienté ESB (construction des APIs en façade via des policies en point & click, plutôt que Management d’API) entraînant un couplage fort entre la solution et les services backends cœurs, avec un risque de « vendor lock-in »",
            "On finit par développer beaucoup de fonctionnalités dans le produit y compris la sécurisation <a href=\"https://tools.ietf.org/html/rfc6749\" target=\"_blank\">OAuth2</a>/<a href=\"https://openid.net/connect/\" target=\"_blank\">OIDC</a>. Pas de réelle valeur apportée en comparaison de développements spécifiques qui peuvent ouvrir à des pratiques intéressantes comme TDD, TDR, CI/CD, etc.",
            "Initialement, l'offre est orientée SaaS avec la possibilité d'un déploiement « on-premises ». Un mode hybride est proposé pour le moment en version Beta",
            "Architecture assez monolithique",
            "Complexité induite par le développement et paramétrage low-code des « policies » dans le produit, qui nécessitent des développeurs·euses formés à la solution Apigee et peut conduire à des problèmes de maintenabilité (test, débogage, etc.)",
            "Pas totalement une véritable solution SaaS et PAYG sur étagère, qui nécessite de contacter le service commercial pour démarrer",
            "Une <i>gateway</i> gérant l'accès aux données & services des <i>backends</i> est un asset stratégique. Implémenter sa « porte d'entrée » pour accéder à ses <i>backends</i> avec une solution qui complète le vaste écosystème d'un des leaders du cloud peut entraîner un risque de dépendance  à l'offre Google et de « cloud lock-in »"
        ]
    },
    {
        "id": "AWS",
        "name": "Amazon API Gateway",
        "description-EN": "<a href=\"https://aws.amazon.com/what-is-aws/\" target=\"_blank\">Amazon Web Services (AWS)</a> offers a cloud-only solution <a href=\"https://aws.amazon.com/api-gateway/\" target=\"_blank\">Amazon API Gateway</a> that allow developers to create, publish, secure, limit access and monitor APIs at any scale. The Gateway act as the \"front door\" for applications to access backends data and services (containerized serverless workloads and web applications). Amazon API Gateway is a PAYG (Pay As You Go) solution which complete a vast ecosystem of a cloud leader.",
        "description-FR": "<a href=\"https://aws.amazon.com/fr/what-is-aws/\" target=\"_blank\">Amazon Web Services (AWS)</a> offre une solution « cloud-only » <a href=\"https://aws.amazon.com/fr/api-gateway/\" target=\"_blank\">Amazon API Gateway</a> qui aide les développeurs·euses à créer, publier, sécuriser, limiter l'accès et monitorer des APIs à n'importe quelle échelle. La <i>gateway</i> sert de « porte d'entrée » pour que les applications puissent accéder aux données et services des <i>backends</i> (charges de travail serverless conteneurisées et applications web). Amazon API Gateway est une solution « PAYG » (Pay As You Go) qui complète le vaste écosystème d'un des leaders du cloud.",
        "website": "href=\"https://aws.amazon.com/api-gateway/",
        "logo": "./conf/apim/aws-logo.png",
        "pros-EN": [
            "Well integrated with a vast managed services ecosystem of a cloud leader",
            "Make sens with a strong commitment toward an AWS cloud strategy",
            "The aura/support from Amazon",
            "Developer/OPS friendly solution",
            "A real PAYG SaaS solution, on the shelf, which does not require to contact sales support to start",
            "Not an ESB oriented solution which relies on protocol transformation capabilities (of existing SOAP services to REST) but focus on managing APIs which avoid heavy coupling between the solution and core backend services",
            "An <a href=\"https://github.com/awslabs/aws-api-gateway-developer-portal\" target=\"_blank\">open source developer portal</a> written in <a href=\"https://fr.reactjs.org/\">React</a>"
        ],
        "pros-FR": [
            "Parfaitement intégrée au vaste écosystème de services managés d'un des leaders du cloud",
            "Fait sens dans une stratégie de fort engagement sur le cloud AWS",
            "L’aura/le support d'Amazon autour du produit",
            "Solution « developer/ OPS friendly » ",
            "Une véritable solution SaaS et PAYG sur étagère qui ne nécessite pas de contacter le service commercial pour démarrer",
            "Ce n'est pas une solution orientée ESB qui repose sur des fonctionnalités de transcodage (des services SOAP existant vers REST) mais se focalise sur le management d'APIs, ce qui limite le couplage entre la solution et les services backends cœurs",
            "Un <a href=\"https://github.com/awslabs/aws-api-gateway-developer-portal\" target=\"_blank\">portail développeur open source </a> écrit en <a href=\"https://fr.reactjs.org/\">React</a>"
        ],
        "cons-EN": [
            "The solution find its origins in service management with a large infrastructure footprint which handle the \"South\" parts of API management (covered by other solution as <a href=\"https://blog.octo.com/octo-vision-on-service-mesh-the-challenges/\" target=\"_blank\">Service mesh</a>) . Especially, Amazon API Gateway offers only a small subset of the API management functionality provided by other pure player & pure player solutions regarding \"North\" parts of API management (billing, a developer portal managing enrolment, allowing to secure API calls with <a href=\"https://openid.net/connect/\" target=\"_blank\">OIDC</a>, etc.) ",
            "A gateway managing backend data & services access is a strategic asset. Implementing its \"front door\" to access backends with a solution that complete a vast ecosystem of a cloud leader may poses a risk of dependencies on other AWS offerings and cloud lock-in"
        ],
        "cons-FR": [
            "Le produit tire ses origines du management de services avec une forte empreinte infrastructure qui traite les problématiques « Sud » du management d'APIs (que l'on retrouve sur d'autres types de produits comme les <a href=\"https://blog.octo.com/octo-vision-on-service-mesh-the-challenges/\" target=\"_blank\">Service mesh</a>) . En particulier, Amazon API Gateway ne propose pas toutes les fonctionnalités offertes par d'autres solutions « pure player », qui sont plus matures sur les aspects « Nord » du management d'APIs (monétisation, portail développeur gérant l'enrôlement et permettant la sécurisation <a href=\"https://openid.net/connect/\" target=\"_blank\">OIDC</a> des appels APIs, etc.) ",
            "Une <i>gateway</i> gérant l'accès aux données & services des <i>backends</i> est un asset stratégique. Implémenter sa « porte d'entrée » pour accéder  à ses <i>backends</i> avec une solution qui complète le vaste écosystème d'un des leaders du cloud peut entraîner un risque de dépendance  à l'offre AWS et de « cloud lock-in »"
        ]
    },
    {
        "id": "AXWAY",
        "name": "Axway",
        "description-EN": "<a href=\"https://www.axway.com/en/products/api-management\" target\"_blank\">AMPLIFY API Management</a> is a french product owned by Sopra-Steria. At first, it was an ESB (strong B2B integration expertise). It evolved into an API Management solution when Sopra-Steria acquired Vordel in 2011",
        "description-FR": "La solution <a href=\"https://www.axway.com/en/products/api-management\" target\"_blank\">AMPLIFY API Management</a> d'AXWAY est un produit français détenu par Sopra-Steria. Initialement, c'était un ESB (forte expertise d'integration B2B) qui après l'acquisition de la solution d'API Management Vordel en 2011, a évolué vers une solution d'API Management intégrale.",
        "website": "axway.com",
        "logo": "./conf/apim/axway-logo.png",
        "pros-EN": [
            "Maturity: heavily deployed, mostly for B2B integration and SOA contexts",
            "ESB & protocol transformation capabilities with Policy Studio (graphical IDE allowing to parametrize and to develop policies with a low-code approach. Ex : SOAP to REST transformation and mashup, security, limiting and so on.)",
            "Product usable by non-developers (low-code point & click approche)",
            "Hybrid mode and multi-datacenter"
        ],
        "pros-FR": [
            "Maturité constatée : beaucoup déployée en France dans des contextes d'integration B2B puis SOA",
            "Fonctionnalités ESB de transcodage éprouvées via le Policy Studio (IDE graphique permettant de paramétrer et développer des policies de transcodage par exemple SOAP to REST, de sécurisation ou de rate limiting, etc.)",
            "Produit accessible à des non-développeurs·euses (approche low-code point & click)",
            "Mode hybrid et multi-datacenter"
        ],
        "cons-EN": [
            "Time to market to deploy the solution can be slow besause the product is often deployed in its on-premises version. But API Management solution are based on complex architectures and is tightly coupled with IS",
            "The community is not sufficient to be autonomous and be able to deploy the solution : dependency toward vendor and integrators",
            "Global complexity regarding low-code policies configuration and programming that require trained Axway developers and may raise maintainability issues (debugging, testing, etc)",
            "Not totaly a PAYG SaaS solution, ready to use on the shelf, which require to contact sales support to start",
            "Mindset and focus mostly on ESB features (strong B2B integration expertise) rather than API stakes (Developer portal, TTFAC, Open API, <a href=\"https://openid.net/connect/\" target=\"_blank\">OIDC</a>, <a href=\"https://tools.ietf.org/html/rfc6749\" target=\"_blank\">OAuth2</a>, etc)",
            "Policy studio & API Gateway integration with Vordel Gateway and portals should be seamless (overlapping features)"
        ],
        "cons-FR": [
            "Le <i>time to market</i> de la mise en œuvre est parfois lent car la solution est souvent déployée en version on-premises. Les solutions d'API Management sous-tendent des architectures globalement complexes et sont très couplées au SI",
            "Pas de communauté suffisante pour pouvoir être autonome sur la mise en oeuvre : dépendance vis-à-vis de l’éditeur et des intégrateurs",
            "Complexité induite par le développement et paramétrage low-code des « policies » dans le produit, qui nécessitent des développeurs·euses formés à la solution Axway et peut conduire à des problèmes de maintenabilité (test, débogage, etc.)",
            "Pas totalement une véritable solution SaaS et PAYG sur étagère, qui nécessite de contacter le service commercial pour démarrer",
            "Le <i>mindset</i> et le focus sont plutôt portés sur les problématiques ESB (forte expertise historique sur l'integration B2B et la transformation de flux) plutôt que sur l'API (Portail développeur, TTFAC, Open API, <a href=\"https://openid.net/connect/\" target=\"_blank\">OIDC</a>, <a href=\"https://tools.ietf.org/html/rfc6749\" target=\"_blank\">OAuth2</a>, etc)",
            "Le Policy studio & l'API Gateway pourraient être intégrés avec la solution Vordel sans que les coutures soient apparentes (quelques doublons sur les fonctionnalités)"
        ]
    },
    {
        "id": "BROADCOM",
        "name": "Broadcom",
        "description-EN": "The API Management solution is one a many solutions sold by Broadcom since the acquisition of CA Technologies in 2018. The solution proposes three software blocks : Layer7 API Gateway, Layer7 API Developer Portal, Layer7 Live API Creator. gateway. It offers cloud-only deployment, fully on-premises deployment and hybrid deployment.",
        "description-FR": "La solution d'API Management fait partie d'une suite de produits proposés par Broadcom après son acquisition de CA Technologies en 2018. La solution repose sur trois briques: Layer7 API Gateway, Layer7 API Developer Portal, Layer7 Live API Creator. Elle propose des modes de déploiement cloud SaaS, on-premises et hybride.",
        "website": "https://www.broadcom.com/info/api-management",
        "logo": "./conf/apim/broadcom-logo.png",
        "pros-EN": [
            "Maturity: heavily deployed, mostly for B2B integration and SOA contexts",
            "ESB & protocol transformation capabilities with Layer7 Live API Creator (graphical IDE allowing to parametrize and to develop policies. Ex : SOAP to REST transformation and mashup, security, limiting and so on.)",
            "Product usable by non-developers (low-code point & click approche)"
        ],
        "pros-FR": [
            "Maturité constatée : beaucoup déployée dans des contextes d'integration B2B puis SOA",
            "Fonctionnalités ESB de transcodage éprouvées via Layer7 Live API Creator (IDE graphique permettant de paramétrer et développer, avec une approche low-code, des policies de transcodage par exemple SOAP to REST, de sécurisation ou de rate limiting, etc.)",
            "Produit accessible à des non-développeurs·euses (approche low-code point & click)"
        ],
        "cons-EN": [
            "Time to market to deploy the solution can be slow besause the product is often deployed in its on-premises version. But API Management solution are based on complex architectures and is tightly coupled with IS",
            "The community is not sufficient to be autonomous and be able to deploy the solution : dependency toward vendor and integrators",
            "Global complexity regarding low-code policies configuration and programming that require trained Broadcom developers and may raise maintainability issues (debugging, testing, etc). The brochure mentions <blockquote>\"Design your service, apply robust logic and expose an enterprise-class API up to 10x faster than traditional coding when you use an extensible low-code development platform to aggregate data sources.\"</blockquote> But it is not straightforward.",
            "Not totaly a PAYG SaaS solution, ready to use on the shelf, which require to contact sales support to start",
            "Mindset and focus mostly on ESB features (strong B2B integration expertise) rather than API stakes (Developer portal, TTFAC, Open API, <a href=\"https://openid.net/connect/\" target=\"_blank\">OIDC</a>, <a href=\"https://tools.ietf.org/html/rfc6749\" target=\"_blank\">OAuth2</a>, etc)"
        ],
        "cons-FR": [
            "Le <i>time to market</i> de la mise en œuvre est parfois lent car la solution est souvent déployée en version on-premises. Les solutions d'API Management sous-tendent des architectures globalement complexes et sont très couplées au SI",
            "Pas de communauté suffisante pour pouvoir être autonome sur la mise en oeuvre : dépendance vis-à-vis de l’éditeur et des intégrateurs",
            "Complexité induite par le développement et paramétrage low-code des « policies » dans le produit, qui nécessitent des développeurs·euses formés à la solution Broadcom et peut conduire à des problèmes de maintenabilité (test, débogage, etc.). La brochure mentionne <blockquote>\"Design your service, apply robust logic and expose an enterprise-class API up to 10x faster than traditional coding when you use an extensible low-code development platform to aggregate data sources.\"</blockquote> Ce n'est hélas pas aussi simple.",
            "Pas totalement une véritable solution SaaS et PAYG sur étagère, qui nécessite de contacter le service commercial pour démarrer",
            "Le <i>mindset</i> et le focus sont plutôt portés sur les problématiques ESB (forte expertise historique sur l'integration B2B et la transformation de flux) plutôt que sur l'API (Portail développeur, TTFAC, Open API, <a href=\"https://openid.net/connect/\" target=\"_blank\">OIDC</a>, <a href=\"https://tools.ietf.org/html/rfc6749\" target=\"_blank\">OAuth2</a>, etc)"
        ]
    },
    {
        "id": "GRAVITEE",
        "name": "Gravitee",
        "description-EN": "GRAVITEE is a <i>made in France</i> <a href=\"https://github.com/gravitee-io\" target=\"_blank\">open source</a> API Management (portail développeur/dashboard, API manager et la gateway) and Access Management solution written in Java and TypeScript. ",
        "description-FR": "GRAVITEE est une solution <a href=\"https://github.com/gravitee-io\" target=\"_blank\">open source</a> d'API Management (developer portal/dashboard, API manager & gateway) et d'Access Management <i>made in France</i> écrite en Java et TypeScript.",
        "website": "https://gravitee.io/",
        "logo": "./conf/apim/gravitee-logo.png",
        "pros-EN": [
            "Provides API Managements' essentials features (gateway, authentication and authorization with  <a href=\"https://openid.net/connect/\" target=\"_blank\">OIDC</a> and <a href=\"https://tools.ietf.org/html/rfc6749\" target=\"_blank\">OAuth2</a> standards)",
            "Friendly and available N1/N2 support",
            "As a challenger, provides new features continuously",
            "Easy and quick to implement",
            "Support external IAM (for example <a href=\"https://www.keycloak.org/\" target=\"keycloak\"></a>)"
        ],
        "pros-FR": [
            "Se concentre sur les fonctionnalités essentielles (<i>gateway, authentification et autorisation</i> via les standards  <a href=\"https://openid.net/connect/\" target=\"_blank\">OIDC</a> et <a href=\"https://tools.ietf.org/html/rfc6749\" target=\"_blank\">OAuth2</a>)",
            "Support N1/N2 réactif et agréable",
            "Positionnement de <i>challenger</i> sur le marché : apport d'évolutions régulier",
            "Mise en place simple et rapide",
            "Supporte des IAM externes (par exemple <a href=\"https://www.keycloak.org/\" target=\"keycloak\"></a>)"
        ],
        "cons-EN": [
            "The solution is still immature on some aspects (documentation, developer portal that may require specific developments , etc.)"
        ],
        "cons-FR": [
            "Solution jeune sur certains aspects (documentation, portail développeur qui nécessite de nombreux re-développements, etc.)"
        ]
    },
    {
        "id": "IBM",
        "name": "IBM",
        "description-EN": "IBM API Connect is an API Management platform providing solutions such as: API Manager, Gateway, developer portal, Cloud Manager. In 2015, IBM acquired <a href=\"https://github.com/strongloop\" target=\"_blank\">Strongloop</a>, an open-source Node.js API Framework ang gateway. IBM API Connect also integrates IBM's DataPower and allows to use its API gateway widely used in SOA-era. The developer portal is based on the open-source CMS <a href=\"https://www.drupal.org/\" target=\"_blank\">Drupal</a>. API Connect is available both on-premises and as cloud SaaS. IBM has been designated leader of the API Management market by IDC.com in 2018, with 22% of market share.",
        "description-FR": "IBM API Connect est une plateforme d'API Management contenant un ensemble de solutions : API Manager, <i>Gateway</i>, portail développeur, Cloud Manager. En 2015, IBM a fait l'acquisition de <a href=\"https://github.com/strongloop\" target=\"_blank\">Strongloop</a>, un framework API et une <i>gateway</i> open-source développés en Node.js. IBM API Connect intègre également IBM's DataPower et permet d'utiliser ses fonctionnalités de <i>gateway</i>, largement déployées à l'ère SOA. Le portail développeur est basé sur le CMS open-source <a href=\"https://www.drupal.org/\" target=\"_blank\">Drupal</a>. API Connect est proposé en version on-premises et cloud SaaS. En 2018, IDC.com annonce qu'IBM est en position de leader avec 22% de parts de marché.",
        "website": "ibm.com",
        "logo": "./conf/apim/ibm-logo.png",
        "pros-EN": [
            "IBM worldwide support",
            "Product usable by non-developers: point & click low-code approach, APIs generation using drag-and-drop components and model driven logic through a graphic user interface, etc. but also by developers because it's based on open-source products : <a href=\"https://loopback.io/\" target=\"_blank\">Loopback</a>, <a href=\"https://github.com/strongloop\" target=\"_blank\">Strongloop</a> and <a href=\"https://www.drupal.org/\" target=\"_blank\">Drupal</a>",
            "Easy to integrate with other IBM products: for instance, it is possible to generate REST APIs based on COBOL mainframe applications. Good integration with DataPower and IBM Cloud (Bluemix)",
            "Friendly and customizable developer portal with themes"
        ],
        "pros-FR": [
            "Le support worldwide IBM",
            "Produit accessible à des non-développeurs·euses : approche <i>low-code point & click</i>, possibilité de générer des APIs à partir de modélisations graphiques, etc. mais également à des développeurs·euses car basé sur des solutions open-source : <a href=\"https://loopback.io/\" target=\"_blank\">Loopback</a>, <a href=\"https://github.com/strongloop\" target=\"_blank\">Strongloop</a> et <a href=\"https://www.drupal.org/\" target=\"_blank\">Drupal</a>",
            "Intégration facilitée lorsqu'on travaille déjà avec des produits IBM : il est par exemple possible de gérer des APIs REST générées à partir d'applications mainframe écrites en COBOL. Bonne intégration avec DataPower et IBM Cloud (Bluemix)",
            "Portail développeur agréable et personnalisable via des thèmes"
        ],
        "cons-EN": [
            "Time to market to deploy the solution can be slow besause the product is often deployed in its on-premises version. But API Management solution are based on complex architectures (DataPower) and is tightly coupled with IS",
            "A gateway managing backend data & services access is a strategic asset. Implementing its \"front door\" to access backends with a solution that complete a vast ecosystem of a cloud leader may poses a risk of dependencies on other IBM offerings and cloud lock-in",
            "Licence cost",
            "It is impossible to do without IBM support in case of incidents, mostly with DataPower gateway implementation",
            "Few references in production (mostly based on the french market)",
            "Not totaly a PAYG SaaS solution, ready to use on the shelf, which require to contact sales support to start",
            "If IBM Cloud and DataPower are not critical stakes, an alternative would be to use open-sources components on whichthe vendor solution is basedon :  <a href=\"https://loopback.io/\" target=\"_blank\">Loopback</a>, <a href=\"https://github.com/strongloop\" target=\"_blank\">Strongloop</a> and <a href=\"https://www.drupal.org/\" target=\"_blank\">Drupal</a>"
        ],
        "cons-FR": [
            "Le <i>time to market</i> de la mise en œuvre est parfois lent car la solution est souvent déployée en version on-premises. Les solutions d'API Management sous-tendent des architectures globalement complexes (DataPower) et sont très couplées au SI",
            "Une <i>gateway</i> gérant l'accès aux données & services des backends est un asset stratégique. Implémenter sa « porte d'entrée » pour accéder  à ses backends avec une solution qui complète le vaste écosystème d'un des leaders du cloud peut entraîner un risque de dépendance à l'offre IBM et de « cloud lock-in »",
            "Coût de la licence",
            "Impossible de se passer du support IBM en cas d'incidents notamment sur l'implementation basée sur DataPower",
            "Faible présence en France et peu de références d’API en production",
            "Pas totalement une véritable solution SaaS et PAYG sur étagère, qui nécessite de contacter le service commercial pour démarrer",
            "Si IBM Cloud et DataPower ne sont pas des enjeux, une alternative peut être d'utiliser les composants open-sources sur lesquels la solution éditeur est basée : <a href=\"https://loopback.io/\" target=\"_blank\">Loopback</a>, <a href=\"https://github.com/strongloop\" target=\"_blank\">Strongloop</a> et <a href=\"https://www.drupal.org/\" target=\"_blank\">Drupal</a>"
        ]
    },
    {
        "id": "KONG",
        "name": "Kong",
        "description-EN": "Kong Inc. offers a platform built on top of Nginx and Cassandra/PostgreSQL, to manage, monitor and scale API and Microservices. The original product was first developed in 2009 in Milan formely known as Mashape. In 2015 the gateway was open-sourced and is today very popular.",
        "description-FR": "Kong Inc. offre une plateforme du même nom, basée sur Nginx et Cassandra/PostreSQL, pour manager, monitorer et publier des APIs et des Microservices. Le produit a été développé initialement en 2009 à Milan sous le nom de Mashape. En 2015, la <i>gateway</i> a été open-sourcée et est aujourd'hui très populaire.",
        "website": "kong.com",
        "logo": "./conf/apim/kong-logo.png",
        "pros-EN": [
            "Solution based on well documented and well designed API (API first) ",
            "High customizability via a plugin mechanism. Kong Hub offers Community Edition and Enterprise Edition plugins (free or paid) to implement some features easily (such as API Key or Bearer token)",
            "<a href=\"https://github.com/Kong/kong\" target=\"_blank\">Open source</a> and widely used Gateway",
            "Gateway architecture and performances",
            "Using Auth0 is simple with the JWT plugin",
            "API Management pure player: this is not the evolution of an ESB solution",
            "Kong is continuously providing new products (Vitals, Immunity or Kuma in 2018/2019) allowing the company to address API Management and microservices (Kubernetes, Service mesh) issues"
        ],
        "pros-FR": [
            "Solution basée sur une API (API first) bien designée et bien documentée",
            "Haute personnalisation possible via un mécanisme de plugin. Kong Hub permet d'accéder à des plugins gratuits ou payants qui permettent d'implémenter certaines fonctionnalités (comme API_KEY et Bearer token)",
            "La <i>gateway</i> est <a href=\"https://github.com/Kong/kong\" target=\"_blank\">open source</a> et largement déployée",
            "Architecture et performances de la <i>gateway</i>",
            "Couplage avec Auth0 simple via le plugin JWT",
            "Pure player de l'API Management (il ne s'agit pas d'un ESB historique)",
            "Kong complète sa ligne de produits en permanence (Vitals, Immunity ou encore Kuma sont des produits sortis en 2018/2019), lui permettant d'être présent sur l'API Management et les microservices (Kubernetes, Services mesh)"
        ],
        "cons-EN": [
            "Require skilled developers to develop plugins (LUA)",
            "The Enterprise Edition (EE) is quite expensive and gives access to great but not essential products (developer portal, monitoring, enterprise plugins, etc.)",
            "Billing is not currently supported out od the box and require specific developments",
            "Light support on API security issues (<a href=\"https://openid.net/connect/\" target=\"_blank\">OIDC</a>, <a href=\"https://tools.ietf.org/html/rfc6749\" target=\"_blank\">OAuth2</a>)",
            "Small actor compared to Google or Red Hat that leads to support difficulties. We can legitimately wonder who is going to buy the solution ?"
        ],
        "cons-FR": [
            "Le développement de Plugins en LUA nécessite des développeurs·euses expérimentés",
            "La version Enterprise Edition (EE) a un coût de licence conséquent qui permet d'accéder à des produits de qualité (portail développeur, monitoring, plugins entreprises, etc.) mais pas indispensables.",
            "Pas de système de monétisation de l'API <i>out-of-the-box</i> pour le moment mais nécessite des développements spécifiques",
            "Connaissances légères sur l'accompagnement autour des problématiques de sécurisation d'API <a href=\"https://openid.net/connect/\" target=\"_blank\">OIDC</a>, <a href=\"https://tools.ietf.org/html/rfc6749\" target=\"_blank\">OAuth2</a>",
            "Acteur n'ayant pas les épaules d'un Google ou d'un Red Hat pour accompagner les entreprises. On peut légitimement se demander quel grand groupe va racheter la solution ?"
        ]
    },
    {
        "id": "MICROSOFT",
        "name": "Microsoft",
        "description-EN": "AZURE API Management helps to expose APIs to external, partner, and internal developers to unlock the potential of their data and services. It has been bought by Microsoft in 2013 to Apiphany. It provides different solutions such as analytics, security of APIs, developer portal, etc.",
        "description-FR": "AZURE API Management permet d'exposer des APIs au monde extérieur, à des partenaires et aux développeurs·euses internes. Microsoft a racheté la startup de Washington-D.C. Apiphany en 2013. La solution offre différentes fonctionnalités telles que l'analytics, la sécurisation des ressources, un portail développeur, un module de transformation de services existants via la mise en oeuvre de façades, etc.",
        "website": "https://azure.microsoft.com/en-us/services/api-management/",
        "logo": "./conf/apim/MS-Azure-logo.png",
        "pros-EN": [
            "The aura/support from Microsoft",
            "Strong full SaaS strategy",
            "Great integration in a Microsoft Azure ecosystem",
            "APIphany Bundle (API Management pure player: this is not the evolution of an ESB solution)",
            "A real PAYG SaaS solution, on the shelf, which does not require to contact sales support to start",
            "Developer portal is <a href=\"https://github.com/Azure/api-management-developer-portal\" target=\"_blank\">open source</a>",
            "Dynamic licence cost",
            "Product usable by non-developers (low-code, point & click)"
        ],
        "pros-FR": [
            "L'aura/le support de Microsoft autour du produit",
            "Stratégie full SaaS pertinente",
            "Bonne intégration dans un écosystème Microsoft AZURE",
            "Bundle de APIphany, pure player de l'API Management (il ne s'agit pas d'un ESB historique)",
            "Une véritable solution SaaS et PAYG sur étagère qui ne nécessite pas de contacter le service commercial pour démarrer",
            "Le portail développeur est <a href=\"https://github.com/Azure/api-management-developer-portal\" target=\"_blank\">open source</a>",
            "Coût de licences évolutif",
            "Produit accessible à des non-développeurs·euses : approche <i>low-code point & click</i>"
        ],
        "cons-EN": [
            "A gateway managing backend data & services access is a strategic asset. Implementing its \"front door\" to access backends with a solution that complete a vast ecosystem of a cloud leader may poses a risk of dependencies on other Microsoft offerings and cloud lock-in",
            "Few references in the french market",
            "Limited developer portal customization features",
            "Limited documentation on security and strong coupling with AZURE security solutions",
            "Hybrid and on-premises mode are not available (work is in progress)"
        ],
        "cons-FR": [
            "Une <i>gateway</i> gérant l'accès aux données & services des backends est un asset stratégique. Implémenter sa « porte d'entrée » pour accéder  à ses backends avec une solution qui complète le vaste écosystème d'un des leaders du cloud peut entraîner un risque de dépendance à l'offre Microsoft et de « cloud lock-in »",
            "Rarement déployée en France",
            "Personnalisation du portail développeur encore assez limité",
            "Très peu de documentation sur la sécurisation et couplage fort avec les solutions de sécurisation Azure",
            "Solutions hybrides et on-premises non disponibles (en cours de développement)"
        ]
    },
    {
        "id": "MULESOFT",
        "name": "Mulesoft",
        "description-EN": "MuleSoft, Inc. is a software company headquartered in San Francisco, that provides integration software for connecting applications, data and devices. Started in 2006, the company originally provided a lightweight enterprise service bus and later expanded to provide an integration platform as a service (iPaaS), with API capabilities: a design center to design and build APIs, a management center to analyze, manage, and monitor APIs, a runtime engine for connecting enterprise applications on-premises and to the cloud to eliminate the need for custom point-to-point integration code. In may 2018, Salesforce completed acquisition of MuleSoft.",
        "description-FR": "MuleSoft, Inc. est une société basée à San Francisco, qui fournit une solution d'intégration pour connecter les applications, les données et les terminaux. En 2006, Mulesoft fournie un ESB light puis une plateforme d'intégration \"as a service\" (iPaaS), avec des fonctionnalités de gestion d'APIs : un centre de design pour designer et construire des APIs, un centre de management pour analyser, manager, et monitorer les APIs, un moteur de <i>runtime</i> pour connecter les applications <i>enterprise on-premises</i> ou cloud afin d'éliminer les besoins d'intégration spécifiques point à point. En mai 2018, Mulesoft est acquise par Salesforce.",
        "website": "https://www.mulesoft.com/",
        "logo": "./conf/apim/mulesoft-logo.png",
        "pros-EN": [
            "An all-in-one platform with on-premises, cloud and hybrid support",
            "Many references for the integration software deployment",
            "Maturity on Digital platform and SOA capabilities",
            "Efficient ESB & protocol transformation capabilities",
            "Product usable by non-developers (low-code, point & click), but also developer-friendly with a lightweight enterprise service bus that rely on specific Java-based development"
        ],
        "pros-FR": [
            "Une plateforme \"all-in-one \" qui peut être déployée sur différents modes : on-premises, cloud et hybride",
            "Des références solides sur le déploiement de leur solution d'intégration",
            "Maturité constatée sur la plateforme Digital et la SOA",
            "Fonctionnalités ESB de transcodage",
            "Produit accessible à des non-développeurs·euses, mais également « developer-friendly » car permet des dévelopement Java spécifiques (lightweight enterprise service bus)"
        ],
        "cons-EN": [
            "Global complexity regarding low-code policies configuration and programming that require trained MuleSoft developers and may raise maintainability issues (debugging, testing, etc). The brochure mentions <blockquote>\"Design and build APIs and integrations at lightning speed\"</blockquote> But it is not straightforward.",
            "It is impossible to do without the vendor support in case of incidents or product evolution",
            "Complexity and lack of flexibility of an \"all-in-one\" vendor solution, due to its ESB history",
            "Focus on ESB, integration with some API Management capabilities",
            "Not totaly a PAYG SaaS solution, ready to use on the shelf, which require to contact sales support"
        ],
        "cons-FR": [
            "Complexité induite par le développement et paramétrage low-code des « policies » dans le produit, qui nécessitent des développeurs·euses formés à la solution Mulesoft et peut conduire à des problèmes de maintenabilité (test, débogage, etc.). La brochure mentionne <blockquote>\"Design and build APIs and integrations at lightning speed\"</blockquote> Ce n'est hélas pas aussi simple.",
            "Impossible de se passer de l'éditeur en cas d'incidents ou de besoins d'évolutions",
            "Complexité et non-flexibilité d’une solution packagée, liée à son historique ESB",
            "Mindset ESB, intégration avec des fonctionnalités de management d'APIs",
            "Pas totalement une véritable solution SaaS et PAYG sur étagère, qui nécessite de contacter le service commercial"
        ]
    },
    {
        "id": "AG",
        "name": "Software AG",
        "description-EN": "Software AG is a German solution vendor who offers a \"Digital Business Platform\" allowing integration, process management, application development, real time analytics, entreprise architecture management. API Management solution offers the following features : gateway & microgateway, developer portal, usage statistics & quotas, secured API publication on the le cloud.",
        "description-FR": "Software AG est un éditeur de logiciel allemand qui offre une solution \"Digital Business Platform\" permettant l‘intégration, la gestion des processus, le développement d’applications adaptatives, l’analytique en temps réel et la gestion d‘architecture d’entreprise. La solution d'API Management propose les fonctionnalités : <i>gateway & microgateway</i>, portail développeur, statistiques d'usage & quotas, publication & sécurisation sur le cloud.",
        "website": "https://www.softwareag.com/be/products/api/default.html",
        "logo": "./conf/apim/SAG-logo.png",
        "pros-EN": [
            "Maturity on wide digital business platform (integration, process management, application development, etc.)",
            "Product usable by non-developers (low-code point & click approche) with a rich user interface",
            "A few references of APIs and developers portal in production, but we've it work efficiently"
        ],
        "pros-FR": [
            "Maturité constatée sur la plateforme digitale (integration, process management, développement d'applications, etc.)",
            "Produit accessible à des non-développeurs·euses (approche <i>low-code point & click</i>) avec une interface utilisateur riche",
            "Quelques références d'API et de portail développeur en production, mais nous les avons vu fonctionner"
        ],
        "cons-EN": [
            "Too few feedbacks",
            "A home-made development framework to customize the solution. The community is not sufficient to be autonomous and be able to deploy the solution : dependency toward vendor and integrators",
            "Licence cost compared to other solutions",
            "It is impossible to do without the vendor support in case of incidents or product evolution",
            "Complexity and lack of flexibility of an all-in-one vendor solution",
            "Focus on all-in-one digital business platform, enterprise process management with some API capabilities"
        ],
        "cons-FR": [
            "Trop peu de retours d'expérience",
            "Un <i>framework</i> de développement maison permet de personnaliser la solution. Pas de communauté suffisante pour pouvoir être autonome sur la mise en oeuvre : dépendance vis-à-vis de l’éditeur et des intégrateurs",
            "Le coût de la licence élevé par rapport aux autres solutions",
            "Impossible de se passer de l'éditeur en cas d'incidents ou de besoins d'évolutions",
            "Complexité et non-flexibilité d’une solution packagée",
            "Mindset plateforme \"all-in-one digital\", automatisation des processus de l'entreprise plus qu'API"
        ]
    },
    {
        "id": "TIBCO",
        "name": "TIBCO Cloud™ Mashery® API Management",
        "description-EN": "TIBCO Software Inc. is an American company that provides integration, analytics and event-processing software for companies. Software is a middleware, ESB which focuses on real-time communication for B2B, B2C data transfers. On August 2015, TIBCO acquired Mashery, an API Management solution from Intel.",
        "description-FR": "TIBCO Software Inc. est une entreprise américaine qui fournit une plateforme d'integration, d'analytics et de gestion d'évenements pour les entreprises. Il s'agit d'un middleware ESB aussi bien rencontré en contexte B2B que B2C. En août 2015, TIBCO a racheté la solution d'API Management Mashery à Intel.",
        "website": "https://www.tibco.com/products/api-management",
        "logo": "./conf/apim/tibco-logo.png",
        "pros-EN": [
            "Maturity: heavily deployed, mostly for B2B integration and SOA contexts",
            "ESB & protocol transformation capabilities with TIBCO’s Connected Intelligence platform graphical IDE that allow to build APIs from many data source (SOAP, JDBC, HTTP, etc) with a low-code point & click approach.",
            "Product usable by non-developers (low-code point & click approche)"
        ],
        "pros-FR": [
            "Maturité constatée : beaucoup déployée dans des contextes d'integration B2B et SOA",
            "Fonctionnalités ESB de transcodage éprouvées via <i>TIBCO’s Connected Intelligence platform</i>  et son IDE graphique qui permet de créer des APIs à partir de  plusieurs data source (SOAP, JDBC, HTTP, etc) via une approche low-code point & click",
            "Produit accessible à des non-développeurs·euses (approche <i>low-code point & click</i>)"
        ],
        "cons-EN": [
            "Some references in the french market but few feedbacks",
            "The community is not sufficient to be autonomous and be able to deploy the solution : dependency toward vendor and integrators",
            "Global complexity regarding low-code policies configuration and programming that require trained Tibco developers and may raise maintainability issues (debugging, testing, etc)",
            "Not totaly a PAYG SaaS solution, ready to use on the shelf, which require to contact sales support for the Mashery Enterprise version",
            "Tibco focus is mostly on based on ESB features (strong B2B integration expertise) rather than API stakes (Developer portal, TTFAC, Open API, <a href=\"https://openid.net/connect/\" target=\"_blank\">OIDC</a>, <a href=\"https://tools.ietf.org/html/rfc6749\" target=\"_blank\">OAuth2</a>, etc)"
        ],
        "cons-FR": [
            "Quelques références sur le marché français mais peu de retours d'expérience",
            "Pas de communauté suffisante pour pouvoir être autonome sur la mise en oeuvre : dépendance vis-à-vis de l’éditeur et des intégrateurs",
            "Complexité induite par le développement et paramétrage <i>low-code</i> des « policies » dans le produit, qui nécessitent des développeurs·euses formés à la solution Tibco et peut conduire à des problèmes de maintenabilité (test, débogage, etc.)",
            "Pas totalement une véritable solution SaaS et PAYG sur étagère, qui nécessite de contacter le service commercial pour la version Mashery Enterprise",
            "Le <i>mindset</i> et le focus de Tibco portent plus sur les problématiques ESB (forte expertise historique sur l'integration B2B et la transformation de flux) plutôt que sur l'API (Portail développeur, TTFAC, Open API, <a href=\"https://openid.net/connect/\" target=\"_blank\">OIDC</a>, <a href=\"https://tools.ietf.org/html/rfc6749\" target=\"_blank\">OAuth2</a>, etc)"
        ]
    },
    {
        "id": "TYK",
        "name": "Tyk",
        "description-EN": "Tyk is an open source API Gateway developed in 2014 in London, which offers an API Management Platform with an API Gateway, API Analytics, Developer Portal and API Management Dashboard.",
        "description-FR": "Tyk est une plateforme d'API Management développée initialement à Londres en 2014, qui offre une <i>gateway</i> <a href=\"https://github.com/TykTechnologies/tyk\" target=\"_blank\">open source</a> écrite en Go, un portail développeur et un tableau de bord sur les APIs avec des fonctionnalités d'analytics.",
        "website": "tyk.com",
        "logo": "./conf/apim/tyk-logo.png",
        "pros-EN": [
            "Nice dashboard with simple and integrated statistics",
            "Simple and accessible solution, with a great time to market for the SaaS version",
            "Licence cost is progressive and reasonable compared to other solutions",
            "API Management pure player: this is not the evolution of an ESB solution",
            "N1/N2 support is friendly and available",
            "SaaS and on-premises versions are great"
        ],
        "pros-FR": [
            "Dashboard pratique, offrant des rapports statistiques simples et déjà intégrés",
            "Solution simple et accessible offrant un bon <i>time to market</i> en SaaS",
            "Coût de licence attractif et progressif",
            "Pure player de l'API Management (il ne s'agit pas d'un ESB maquillé)",
            "Le support N1/N2 est réactif et très sympathique",
            "Utilisation en SaaS ou on-premises de qualité"
        ],
        "cons-EN": [
            "Hybrid version has some issues and missing features. For instance, SaaS gateway remains active",
            "API Security is basic: <a href=\"https://tools.ietf.org/html/rfc6749\" target=\"_blank\">OAuth2</a> client credentials flow uses opaque tokens and does not manage scopes. Implementing <a href=\"https://openid.net/connect/\" target=\"_blank\">OIDC</a> is only possible with third-party solutions",
            "JS plugins are hard to implement",
            "Documentation is not up-to-date: it is sometime necessary to take a look to GO source code to understand how the product works",
            "N3 support can not help with API Security, performance or deployment issues",
            "The API could have a better design regarding REST standards (unconsistant resources IDs, etc.)"
        ],
        "cons-FR": [
            "Fonctionnalités manquantes et BUG pour le mode Hybride. Par exemple, la <i>gateway</i> Saas reste active",
            "Sécurisation API basique : Le flow client credentials <a href=\"https://tools.ietf.org/html/rfc6749\" target=\"_blank\">OAuth2</a> utilise des tokens opaques et ne gère pas les scopes. Pas d'implémentation <a href=\"https://openid.net/connect/\" target=\"_blank\">OIDC</a> (obligation d'utiliser une solution tierce)",
            "Plugins JS laborieux à mettre en place",
            "La documentation manque de cohérence globale et de mises à jour (il arrive de devoir lire le code GO pour comprendre certains mécanismes)",
            "Compétence du support N3 (faible compréhension des problématiques de sécurisation <a href=\"https://openid.net/connect/\" target=\"_blank\">OIDC</a>/<a href=\"https://tools.ietf.org/html/rfc6749\" target=\"_blank\">OAuth2</a>, de performance, de déploiement, etc.)",
            "L'API est d'une qualité perfectible au regard des standards REST (identifiants de ressources non homogènes, etc.)"
        ]
    },
    {
        "id": "WSO2",
        "name": "WSO2",
        "description-EN": "WSO2 is an open-source technology provider founded in 2006. It offers an enterprise platform for integrating application programming interfaces (APIs), applications, and web services locally and across the Internet.",
        "description-FR": "WSO2 est un fournisseur de technologie open-source fondé en 2006. Il offre une plate-forme d'entreprise pour l'intégration d'interfaces de programmation d'applications, d'applications et de services Web localement et sur Internet.",
        "website": "wso2.com",
        "logo": "./conf/apim/WSO2-logo.png",
        "pros-EN": [
            "Open source approach",
            "Known solution since the ESB-light trend",
            "Relevant solution in a Java ecosystem"
        ],
        "pros-FR": [
            "Solution <a href=\"https://github.com/wso2\" target=\"_blank\">open source</a>",
            "Solution connue et éprouvée depuis la vague ESB-light",
            "Solution pertinente dans un ecosystème Java"
        ],
        "cons-EN": [
            "Complexe documentation (more than 1600 pages...)",
            "Mixed feedbacks: complex implementation, counterintuitive behaviours, complex customization, many limitations...",
            "Small community of users on the internet that is not really helping on complex subjects such as security (<a href=\"https://tools.ietf.org/html/rfc6749\" target=\"_blank\">OAuth2</a>, <a href=\"https://openid.net/connect/\" target=\"_blank\">OIDC</a>...)",
            "Act as a light ESB (transcoding feature)",
            "Risk of vendor lock-in because WSO2 provides many integrated solutions such as analytics, ESB, authentication...",
            "On-premises pricing is increasing quickly: each instance is billed"
        ],
        "cons-FR": [
            "Documentation complexe (plus de 1600 pages...)",
            "Retours d’expérience mitigés : solution et personnalisation complexes à mettre en oeuvre, comportements contre-intuitifs, nombreuses limitations...",
            "Faible communauté d'entraide sur internet lorsqu'on rencontre des problèmes sur des sujets avancés : problématiques de sécurisation d'API <a href=\"https://openid.net/connect/\" target=\"_blank\">OIDC</a>, <a href=\"https://tools.ietf.org/html/rfc6749\" target=\"_blank\">OAuth2</a>",
            "Forte emprunte ESB-light (brique de transcodage)",
            "WSO2 éditant une suite de logiciels qui s'intègrent les uns aux autres (analytics, ESB, authentification...), il y a un risque de <i>vendor lock-in</i>",
            "Le coût des licences on-premises : la facturation se fait à l'instance et grimpe donc très rapidement"
        ]
    }
]


$(document).ready(function() {

    var OCTO_APIM_APP = OCTO_APIM_APP || {};

    OCTO_APIM_APP.app = {
        conf: {
            // three json config files to be loaded at init
            cms: conf_cms,
            quizz: conf_quizz,
            vendorSolutions:conf_vendorsolutions
        },
        lang: "FR",
        currentNav: 'NAVBENCHMARK',        // default landing page ⇒ solutions
        hasToDisplayQuizz: false,
        quizzId: "ID1",
        apims: [],
        history: [],
        _parameter: function (url, name) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\#&?]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(url);
            if (results == null)
                return "";
            else
                return results[1];
        },
        _getCMSValue: function (section, key) {
            var domSection = this.conf.cms[section];
            if( (domSection[key + '-' + this.lang]) != null) {
                return domSection[key + '-' + this.lang];
            } else {
                return domSection[key];
            }
        },
        _setCMSValue: function (selector, section, key) {
            var domSection = this.conf.cms[section];
            $(selector).html(domSection[key + '-' + this.lang]);
        },
        _paralaxHook: function() {
            var baseHeight = 0;
            var decalage = $(window).scrollTop() / 3 - baseHeight;
            $('#home-bg-container div').css('background-position-y', decalage + 'px');
        },
        _resizeVideoContainerHook: function() {
            $('header').fadeIn();
            var windowHeight = $(window).height();
            $('#home-bg-container').css('height', ''+ windowHeight +'px');
            $('#nav-overlay').css('height', ''+ windowHeight +'px');
            if($(window).width()>=992) {
                windowHeight -=200;
            } else if($(window).width()>=768) {
                windowHeight -=50;
            } else {
                windowHeight -=150;
            }
            $('#section-intro').css('height', ''+ windowHeight +'px');
            $('#section-quizz').css('height', ''+ windowHeight +'px');
            $('#section-intro-solutions').css('height', ''+ windowHeight +'px');
            $('#section-intro-comparateur').css('height', ''+ windowHeight +'px');
            $('#section-comparateur').css('height', ''+ windowHeight +'px');
        },
        _stickyMenuHook: function() {
            var menu = $('header:eq(1)');
            var $window = $(window);

            var window_top_position = $window.scrollTop();
            if(window_top_position >= 200) {
                menu.addClass('in-view');
            } else {
                menu.removeClass('in-view');
                $('.navbar-collapse').collapse('hide');
            }
        },
        _overlayMenuHook: function() {
            var $window = $(window);

            var window_top_position = $window.scrollTop();
            if(window_top_position >=  ($(window).height()/2)) {
                $('#nav-overlay .blog-link').css('color', '#0e2356');
                $('#nav-overlay .contact-link').css('color', '#0e2356');
            } else {
                $('#nav-overlay .blog-link').css('color', '#FFF');
                $('#nav-overlay .contact-link').css('color', '#FFF');
            }
        },
        _backHistoryHook: function() {
            var back = this.history.shift();
            if(back[0]=='NAVINTRO') {
                this.displayIntro();
            } else if(back[0]=='NAVQUIZZ') {
                this.displayQuizz(back[1],back[2]);
            } else {
                this.displayAllSolutions();
            }
        },
        _animateShapes: function() {
            if ( $('.shapes').length ) {

                var pathC = anime.path('.shape-c path');
                anime({
                    targets: '.shape-c .icon',
                    translateX: pathC('x'),
                    translateY: pathC('y'),
                    easing: 'linear',
                    duration: 50000,
                    direction: 'reverse',
                    loop: true
                });

                var pathTarget = anime.path('.shape-target path');
                anime({
                    targets: '.shape-target .icon',
                    translateX: pathTarget('x'),
                    translateY: pathTarget('y'),
                    easing: 'linear',
                    duration: 55000,
                    loop: true
                });

                var pathLogo = anime.path('.shape-logo path');
                anime({
                    targets: '.shape-logo .icon',
                    translateX: pathLogo('x'),
                    translateY: pathLogo('y'),
                    rotate: pathLogo('angle'),
                    easing: 'linear',
                    duration: 58000,
                    direction: 'reverse',
                    loop: true
                });

                var pathPlay = anime.path('.shape-play path');
                anime({
                    targets: '.shape-play .icon',
                    translateX: pathPlay('x'),
                    translateY: pathPlay('y'),
                    rotate: 360,
                    easing: 'linear',
                    duration: 52000,
                    loop: true
                });
            }
        },
        _reDisplay: function() {
            this.displayHome();
            $('#section-intro-comparateur').hide();
            $('#section-comparateur').hide();
            $('.button-comparateur').removeClass('active');
            switch (this.currentNav) {
                case 'NAVQUIZZ':
                    if(this.hasToDisplayQuizz) {
                        this.displayQuizz(this.quizzId);
                    } else {
                        this.displayIntro();
                    }
                    break;
                case 'NAVBENCHMARK':
                    this.displayAllSolutions();
                    break;
            }
        },
        displayHome: function() {
            $("header:first-of-type").hide();
            $("footer:first-of-type").hide();
            this._setCMSValue('.button-quizz a', 'home', 'header-menu-quizz');
            this._setCMSValue('.button-solutions a', 'home', 'header-menu-solutions');
            this._setCMSValue('.button-comparateur a', 'home', 'header-menu-comparateur');
            this._setCMSValue('.button-publications a', 'home', 'header-menu-publications');
            this._setCMSValue('.button-download a', 'home', 'header-menu-download');

            this._setCMSValue('#button-legal a', 'home', 'footer-button-legal');
            this._setCMSValue('#button-press a', 'home', 'footer-button-press');
            this._setCMSValue('#button-blog a', 'home', 'footer-button-blog');
            this._setCMSValue('#button-contact a', 'home', 'footer-button-contact');
            $("header:first-of-type").fadeIn();
            $("footer:first-of-type").fadeIn();
        },
        displayIntro: function() {
            this._setCMSValue('.button-quizz a', 'home', 'header-menu-quizz');
            this._setCMSValue('.start-quizz-bloc h2', 'home', 'bloc-quizz-title');
            this._setCMSValue('.start-quizz-bloc h3', 'home', 'bloc-quizz-subtitle');
            this._setCMSValue('.solutions-bloc h2', 'home', 'bloc-solutions-title');
            this._setCMSValue('.solutions-bloc h3', 'home', 'bloc-solutions-subtitle');
            this._setCMSValue('.solutions-bloc h2', 'home', 'bloc-solutions-title');

            $("#section-intro").hide();
            $("#section-intro-solutions").hide();
            $("#section-intro-comparateur").hide();
            this.quizzId = "ID1";
            $("form").hide();
            $("#section-quizz").hide();
            $("#section-solutions").hide();
            $("#section-comparateur").hide();
            $('.button-comparateur').removeClass('active');


            if($(window).width()<768) {
                $("#home-bg").css('background-image', 'url(' + this._getCMSValue('home', 'background-image-mobile') + ')');
            } else {
                $("#home-bg").css('background-image', 'url(' + this._getCMSValue('home', 'background-image') + ')');
            }
            $("#home-bg").removeClass("transparent");
            $("#home-bg-open").addClass("transparent");
            $("#home-bg-solutions").addClass("transparent");
            $("#section-intro").fadeIn();
        },
        displayQuizz: function(id, value) {
            var self = this;
            if(!id) {
                id = "ID1";
            }
            self.currentNav = 'NAVQUIZZ';
            this.hasToDisplayQuizz = true;
            // Masquer systématiquement le comparateur dès qu'on affiche le quizz
            $('#section-intro-comparateur').hide();
            $('#section-comparateur').hide();
            $('.button-comparateur').removeClass('active');

            this.quizzId = id;
            $("form").hide();

            if(self.conf.quizz.quizz[id].type == "leaf") {
                var apims = self.conf.quizz.quizz[id].apim;
                var fail = self.conf.quizz.quizz[id].fail;
                if(fail) {
                    self.displayFail(fail);
                    $(".return-button").click(function() {
                        self._backHistoryHook();
                    });
                } else {
                    self.displayQuizzSolutions(apims);
                    $(".return-button").click(function() {
                        self._backHistoryHook();
                    });
                }
            } else {
                $("#form-" + id).show();
                var html = this._generateQuizzBloc(id, value);

                $("#section-quizz").html(html);

                $("input[type=radio]").click(function(e) {
                    e.preventDefault();
                    var current = $(this);
                    var ID = current.attr("id");

                    self.history.unshift(['NAVQUIZZ', id, current.attr("value")]);
                    self.displayQuizz(current.attr("id"), value);
                });

                $(".return-button").click(function() {
                    self._backHistoryHook();
                });

                $("#section-intro").hide();
                $("#section-intro-solutions").hide();
                $("#section-solutions").hide();
                $("#home-bg").addClass("transparent");
                $("#home-bg-open").removeClass("transparent");
                $("#home-bg-solutions").addClass("transparent");
                $("#section-quizz").fadeIn();
            }
        },
        start: function() {

            // init quizz form
            var self = this;
            $("section").hide();
            $("input[type=radio]").removeAttr('checked');

            $("#logo-octo").click(function(e) {
                e.preventDefault();
                self.currentNav = 'NAVQUIZZ';
                self.hasToDisplayQuizz = false;
                window.location.hash = '';
                app._reDisplay();
                $(".button-solutions").removeClass("active");
                $(".button-quizz").removeClass("active");
                $(".scroll-to-link").hide();
            });

            $(".button-quizz").click(function(e) {
                e.preventDefault();
                self.history.unshift(['NAVINTRO']);
                window.location.hash = 'display=NAVQUIZZ'+self.lang;
                app.displayQuizz();
                $(".button-solutions").removeClass("active");
                $(".button-quizz").addClass("active");
                $(".scroll-to-link").hide();
            });

            $(".button-solutions").click(function(e) {
                e.preventDefault();
                window.location.hash = 'display=NAVBENCHMARK'+self.lang;
                app.displayAllSolutions();
                $(".button-quizz").removeClass("active");
                $(".button-solutions").addClass("active");
            });

            $(".button-comparateur").click(function(e) {
                e.preventDefault();
                window.location.hash = 'display=NAVCOMPARATEUR'+self.lang;
                // show comparateur sections - for now reuse solutions content
                app.displayAllComparateur();
                $(".button-quizz").removeClass("active");
                $(".button-solutions").removeClass("active");
                $(".button-comparateur").addClass("active");
            });

            $("#navbar a").click(function(e) {
                $("#bg").fadeIn();
            });

            $(".button-lang-fr").click(function(e) {
                e.preventDefault();
                self.lang = "FR";
                window.location.hash = 'display='+self.currentNav+'FR';
                self._reDisplay();
                $(".button-lang-en").removeClass("active");
                $(".button-lang-fr").addClass("active");
            });

            $(".button-lang-en").click(function(e) {
                e.preventDefault();
                self.lang = "EN";
                window.location.hash = 'display='+self.currentNav+'EN';
                self._reDisplay();
                $(".button-lang-fr").removeClass("active");
                $(".button-lang-en").addClass("active");
            });

            $("#nav-overlay .scroll-to-link").click(function(e) {
                e.preventDefault();
                var scrollTo = $("#nav-overlay .scroll-to-link").offset().top +50;
                $('html, body').animate({
                    scrollTop: scrollTo
                }, 200);
            });

            $(".start-quizz-bloc").click(function() {
                self.history.unshift(['NAVINTRO']);
                self.displayQuizz();
                $(".button-solutions").removeClass("active");
                $(".button-quizz").addClass("active");
            });

            $(".solutions-bloc").click(function() {
                app.displayAllSolutions();
                $(".button-quizz").removeClass("active");
                $('.button-comparateur').removeClass('active');
                $(".button-solutions").addClass("active");
                

            });

            $(".footer-warning a").click(function() {
                $(".footer-warning").hide();
            });

            $("form").submit(function(e) {
                e.preventDefault();
            });

            // override all app backgrounds if specified in url
            var specifiedImg = self._parameter(window.location, 'bg');
            if (specifiedImg != "") {
                self.conf.cms.home["background-image"] = specifiedImg;
                self.conf.cms.home["background-image-mobile"] = specifiedImg;
                self.conf.cms["section-quizz"]["background-image"] = specifiedImg;
                self.conf.cms["section-intro-solutions"]["background-image"] = specifiedImg;
                self.conf.cms["section-intro-comparateur"]["background-image"] = specifiedImg;
            }

            var displayParam = self._parameter(window.location, 'display');
            if (displayParam != "") {
                switch (displayParam) {
                case 'NAVQUIZZFR':
                    self.currentNav = 'NAVQUIZZ';
                    $(".button-solutions").removeClass("active");
                    $(".button-quizz").addClass("active");
                    self.lang = "FR";
                    $(".button-lang-en").removeClass("active");
                    $(".button-lang-fr").addClass("active");
                    break;
                case 'NAVQUIZZEN':
                    self.currentNav = 'NAVQUIZZ';
                    $(".button-solutions").removeClass("active");
                    $(".button-quizz").addClass("active");
                    self.lang = "EN";
                    $(".button-lang-en").addClass("active");
                    $(".button-lang-fr").removeClass("active");
                    break;
                case 'NAVBENCHMARKFR':
                    self.currentNav = 'NAVBENCHMARK';
                    $(".button-quizz").removeClass("active");
                    $(".button-solutions").addClass("active");
                    self.lang = "FR";
                    $(".button-lang-en").removeClass("active");
                    $(".button-lang-fr").addClass("active");
                    break;
                case 'NAVBENCHMARKEN':
                    self.currentNav = 'NAVBENCHMARK';
                    $(".button-quizz").removeClass("active");
                    $(".button-solutions").addClass("active");
                    self.lang = "EN";
                    $(".button-lang-en").addClass("active");
                    $(".button-lang-fr").removeClass("active");
                    break;
                case 'NAVCOMPARATEURFR':
                    self.currentNav = 'NAVCOMPARATEUR';
                    $(".button-quizz").removeClass("active");
                    $(".button-comparateur").addClass("active");
                    self.lang = "FR";
                    $(".button-lang-en").removeClass("active");
                    $(".button-lang-fr").addClass("active");
                    break;
                case 'NAVCOMPARATEUREN':
                    self.currentNav = 'NAVCOMPARATEUR';
                    $(".button-quizz").removeClass("active");
                    $(".button-comparateur").addClass("active");
                    self.lang = "EN";
                    $(".button-lang-en").addClass("active");
                    $(".button-lang-fr").removeClass("active");
                    break;
                }
            }

            self._reDisplay();
            self._animateShapes();
            self._resizeVideoContainerHook();
            self._paralaxHook();
            self._stickyMenuHook();

            $('header:eq(1)').on('hidden.bs.collapse', function () {
                self._stickyMenuHook();
            });

            $(window).resize(function() {
                self._resizeVideoContainerHook();
            });
            $(window).scroll(function() {
                self._paralaxHook();
                self._stickyMenuHook();
                self._overlayMenuHook();
            });

            console.log("app initialized...");
        },
        displayAllSolutions: function() {
            this.currentNav = 'NAVBENCHMARK';
            $('.button-comparateur').removeClass('active');
            $("#section-intro").hide();
            $("#section-quizz").hide();
            $("#home-bg").addClass("transparent");
            $("#home-bg-open").addClass("transparent");
            $("#home-bg-solutions").removeClass("transparent");
            this._setCMSValue('#section-intro-solutions h1', 'home', 'section-intro-solutions-title');
            this._setCMSValue('#section-intro-solutions p', 'home', 'section-intro-solutions-subtitle');

            this.displaySolutionsDetailed([
                "3SCALE",
                "APIGEE",
                "AWS",
                "AXWAY",
                "BROADCOM",
                "GRAVITEE",
                "IBM",
                "KONG",
                "MICROSOFT",
                "MULESOFT",
                "AG",
                "TIBCO",
                "TYK",
                "WSO2"
            ]);
            // ensure comparateur is hidden when displaying solutions
            $("#section-intro-comparateur").hide();
            $("#section-comparateur").hide();
            $("#section-intro-solutions").fadeIn();
            $("#section-solutions").fadeIn();
        },

        displayAllComparateur: function() {
            this.currentNav = 'NAVCOMPARATEUR';
            $("#section-intro").hide();
            $("#section-quizz").hide();
            $("#home-bg").addClass("transparent");
            $("#home-bg-open").addClass("transparent");
            $("#home-bg-solutions").removeClass("transparent");
            // reuse the same CMS values as solutions for now
            this._setCMSValue('#section-intro-comparateur h1', 'home', 'section-intro-comparateur-title');
            this._setCMSValue('#section-intro-comparateur p', 'home', 'section-intro-comparateur-subtitle');

            // Hide solutions when showing comparateur and show the static 'A venir' block
            $("#section-intro-solutions").hide();
            $("#section-solutions").hide();
            $("#section-intro-comparateur").fadeIn();
            // inject comparateur UI into the comparateur block
            var ui = this._buildComparateurUI();
            $('#bloc-comparateur').html('<h2>Comparateur.</h2>' + ui);
            $("#section-comparateur").fadeIn();
            this._attachComparateurHandlers();
        },

        _renderStars: function(n) {
            var stars = '';
            for(var i=1;i<=5;i++) {
                if(i<=n) stars += '<span class="icon icon-star-full">★</span>';
                else stars += '<span class="icon icon-star-empty">☆</span>';
            }
            return stars;
        },

        _buildComparateurUI: function() {
            var self = this;
            // build select options from vendorSolutions
            var options = '';
            Object.keys(conf_apims_notes).forEach(function (vendor) {
                options += '<option value="' + vendor + '">' + vendor + '</option>';
            });

            var html = '';
            html += '<div class="row">';
            html += '<div class="col-md-5">';
            html += '<label for="compare-left">Solution 1</label>';
            html += '<select id="compare-left" class="form-control">'+options+'</select>';
            html += '</div>';
            html += '<div class="col-md-2 text-center" style="display:flex;align-items:center;justify-content:center;">';
            html += '<strong>VS</strong>';
            html += '</div>';
            html += '<div class="col-md-5">';
            html += '<label for="compare-right">Solution 2</label>';
            html += '<select id="compare-right" class="form-control">'+options+'</select>';
            html += '</div>';
            html += '</div>';

            // features rows (derive from conf_apims_notes first vendor)
            var features = [];
            for(var k in conf_apims_notes) {
                features = Object.keys(conf_apims_notes[k]);
                break;
            }

            html += '<div class="row" style="margin-top:20px;">';
            html += '<div class="col-md-12">';
            html += '<table class="table table-bordered" id="comparateur-table">';
            html += '<thead><tr><th>Feature</th><th id="col-left">APIM A</th><th id="col-right">APIM B</th></tr></thead>';
            html += '<tbody>';
            for(var f=0; f<features.length; f++) {
                html += '<tr data-feature="'+features[f]+'">';
                html += '<td>'+features[f]+'</td>';
                html += '<td class="val-left">'+this._renderStars(0)+'</td>';
                html += '<td class="val-right">'+this._renderStars(0)+'</td>';
                html += '</tr>';
            }
            html += '</tbody>';
            html += '</table>';
            html += '</div>';
            html += '</div>';

            return html;
        },

        _attachComparateurHandlers: function() {
            var self = this;
            $(document).on('change', '#compare-left, #compare-right', function() {
                var left = $('#compare-left').val();
                var right = $('#compare-right').val();
                $('#col-left').text(left);
                $('#col-right').text(right);

                $('#comparateur-table tbody tr').each(function() {
                    var feature = $(this).data('feature');
                    var leftNote = (conf_apims_notes[left] && conf_apims_notes[left][feature]) ? conf_apims_notes[left][feature] : 0;
                    var rightNote = (conf_apims_notes[right] && conf_apims_notes[right][feature]) ? conf_apims_notes[right][feature] : 0;
                    $(this).find('.val-left').html(self._renderStars(leftNote));
                    $(this).find('.val-right').html(self._renderStars(rightNote));
                });
            });

            // trigger initial populate
            setTimeout(function(){ $('#compare-left').trigger('change'); }, 50);
        },
        displayFail: function(failID) {
            var fail = null;
            for(var i = 0; i < this.conf.quizz.fails.length; i++) {
                if(this.conf.quizz.fails[i].id==failID) {
                    fail = this.conf.quizz.fails[i];
                    break;
                }
            }
            var htmlfail = '<div class="row">';

            htmlfail += '<div class="col-md-6">';
            htmlfail += '<div class="bloc">';
            htmlfail += '<h2>' + fail.name + '</h2>';
            htmlfail += '<h3 class="card-text">' + fail["description-" + this.lang] + '</h3>';
            htmlfail += '</div>';
            htmlfail += '</div>';

            htmlfail += '</div>';
            htmlfail += '<a class="return-button" href="#"><span class="icon icon-shape-chevron"></span> ' + this._getCMSValue('home', 'section-quizz-return-button') + '</a>';
            $("form").hide();
            $("#section-quizz").html(htmlfail);
        },
        displayQuizzSolutions: function(apims) {
            this.apims = apims;
            var self = this;
            // var htmlapims = '<div class="row"><div class="title">' + this._getCMSValue('home', 'section-quizz-title') + '</div></div>';
            var htmlapims = '<div class="row"><h2 class="title">' + this._getCMSValue('home', 'section-quizz-title') + '</h2></div>';
            htmlapims += '<div class="row">';
            for(var i = 0; i < apims.length; i++) {
                var apim = apims[i];
                for(var j = 0; j < self.conf.vendorSolutions.length; j++) {
                    if(apim == self.conf.vendorSolutions[j].id) {
                        htmlapims += self._generateSummarySolutionBloc(self.conf.vendorSolutions[j]);
                        if(i != 0 && (i + 1) % 3 === 0) {
                            htmlapims += '</div>';
                            htmlapims += '<div class="row">';
                        }
                    }
                }
            }
            htmlapims += '</div>';
            htmlapims += '<a class="return-button" href="#"><span class="icon icon-shape-chevron"></span> ' + this._getCMSValue('home', 'section-quizz-return-button') + '</a>';
            $("form").hide();
            $("#home-bg").addClass("transparent");
            $("#home-bg-open").removeClass("transparent");
            $("#home-bg-solutions").addClass("transparent");
            $("#section-quizz").html(htmlapims);
            //-- generate matching solutions in section-solution --
            this.displaySolutionsDetailed(apims);
            $("#section-solutions").fadeIn();

            // for all apims, attach event on click to go to detail bloc
            apims.forEach(function(apim) {
                var scrollTo = "#bloc-solution-" + apim;
                $("#" + apim + "").click(function(e) {
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: $(scrollTo).offset().top -70
                    }, 200);

                });
            });

            $(".scroll-to-link").fadeIn();
        },
        displaySolutionsDetailed: function(apims) {
            this.apims = apims;
            var self = this;
            var htmlapims = '';
            for(var i = 0; i < apims.length; i++) {
                var apim = apims[i];
                for(var j = 0; j < self.conf.vendorSolutions.length; j++) {
                    if(apim == self.conf.vendorSolutions[j].id) {
                        htmlapims += '<div class="row">';
                        htmlapims += self._generateDetailedSolutionBloc(self.conf.vendorSolutions[j]);
                        htmlapims += '</div>';
                    }
                }
            }

            // Always inject detailed solution blocks into the solutions placeholder.
            $("#solutionsplaceholder").html(htmlapims);

            // for all apims, attach event on click to display pros & cons
            apims.forEach(function(apim) {
                var selectorCons = "#bloc-solution-" + apim + " .button-cons";
                var selectorPros = "#bloc-solution-" + apim + " .button-pros";
                $(selectorCons).click(function(e) {
                    e.preventDefault();
                    $("#bloc-solution-" + apim + " .bloc-pros").hide();
                    $("#bloc-solution-" + apim + " .bloc-cons").fadeIn();
                    $(selectorPros).removeClass("active");
                    $(selectorCons).addClass("active");
                });
                $(selectorPros).click(function(e) {
                    e.preventDefault();
                    $("#bloc-solution-" + apim + " .bloc-cons").hide();
                    $("#bloc-solution-" + apim + " .bloc-pros").fadeIn();
                    $(selectorCons).removeClass("active");
                    $(selectorPros).addClass("active");
                });
            });

            // show the corresponding section
            // Only show/hide the solutions section here; comparateur is a static section handled elsewhere.
            $("#section-solutions").fadeIn();
            $("#solutionsplaceholder").fadeIn();

            $(".scroll-to-link").fadeIn();
        },
        _generateQuizzBloc: function(quizzID, value) {
            var self = this;
            var question = this.conf.quizz.quizz[quizzID];

            var html = '<div class="row">';
            html += '<div class="col-md-6">';
            html += '<div class="bloc">';

            html += '<form id="form-' + quizzID + '" class="needs-validation">';
            html += '<h1 class="mb-3">' + question["question-" + self.lang] + '</h1>';
            for(var i = 0; i < question.answers.length; i++) {
                var answer = question.answers[i];
                var id = 'ID' + answer.goto + '';
                html += '<div class="form-check">';
                if(answer.goto == value) {
                    html += '<input class="form-check-input" type="radio" name="radio-' + quizzID + '" id="' + id + '" value="' + answer.goto + '" checked>';
                } else {
                    html += '<input class="form-check-input" type="radio" name="radio-' + quizzID + '" id="' + id + '" value="' + answer.goto + '">';
                }
                html += '<label class="form-check-label" for="' + id + '">';
                html += '' + answer["answer-" + self.lang] + '';
                html += '</label>';
                html += '</div>';
            }
            html += '</form>';

            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '<a class="return-button" href="#"><span class="icon icon-shape-chevron"></span> ' + this._getCMSValue('home', 'section-quizz-return-button') + '</a>';

            return html;
        },
        _generateSummarySolutionBloc: function(apim) {
            var html = '<div class="col-md-4">';
            html += '<div id="'+apim.id+'" class="bloc bloc-apim">';
            html += '<div class="logo-container"><img src="' + apim.logo + '" alt="' + apim.name + '"></div>';
            html += '<h3>' + this._getCMSValue('home', 'bloc-solutions-button-knowmore') + '</h3>';
            html += '</div>';
            html += '</div>';
            return html;
        },
        _generateDetailedSolutionBloc: function(apim) {

            var html = '';
            html += '<div class="col-md-12">';
            html += '<div class="bloc-edito" id="bloc-solution-' + apim.id + '">';
            html += '<h2>' + apim.name + '.</h2>';
            html += '<p>' + apim["description-" + this.lang] + '</p>';

            html += '<ul class="nav nav-tabs">';
            html += '<li class="nav-item">';
            html += '<a class="nav-link active button-pros" href="#"><img src="./skin2/img/plus-jaune.png" alt="cons- '+ apim.name + '"></a>';
            html += '</li>';
            html += '<li class="nav-item">';
            html += '<a class="nav-link button-cons" href="#"><img src="./skin2/img/moins-jaune.png" alt="cons- \'+ apim.name + \'"></a>';
            html += '</li>';
            html += '</ul>';

            html += '<div class="bloc">';
            html += '<ul class="bloc-pros">';
            for(var i = 0; i < apim["pros-" + this.lang].length; i++) {
                html += '<li>';
                html += '&gt;&nbsp;' + apim["pros-" + this.lang][i] + '<br />';
                html += '</li>';
            }
            html += '</ul>';

            html += '<ul class="bloc-cons">';
            for(var i = 0; i < apim["cons-" + this.lang].length; i++) {
                html += '<li>';
                html += '&gt;&nbsp;' + apim["cons-" + this.lang][i] + '<br />';
                html += '</li>';
            }
            html += '</ul>';
            html += '</div>';

            html += '</div>';
            html += '</div>';

            return html;
        }
    }

    var app = OCTO_APIM_APP.app || new OCTO_APIM_APP.app();
    app.start();
});
