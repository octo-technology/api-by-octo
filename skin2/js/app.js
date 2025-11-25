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
        "header-menu-solutions-EN": "Solutions",
        "header-menu-solutions-FR": "Les solutions",
        "header-menu-comparateur-EN": "Comparator",
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
        "bloc-comparateur-title-FR": "SOLUTIONS<br/> D'API MANAGEMENT",
        "bloc-comparateur-title-EN": "API MANAGEMENT SOLUTIONS",
        "bloc-comparateur-subtitle-FR": "Comparer les solutions!",
        "bloc-comparateur-subtitle-EN": "Compare the solutions!",
        "bloc-solutions-subtitle-EN": "See the benchmark!",
        "bloc-solutions-subtitle-FR": "Consulter le benchmark",
        "bloc-solutions-button-knowmore-EN": "For more information",
        "bloc-solutions-button-knowmore-FR": "En savoir plus",
        "section-quizz-title-FR": "Solution identifiées.",
        "section-quizz-title-EN": "Corresponding solutions.",
        "section-quizz-return-button-EN": "Back",
        "section-quizz-return-button-FR": "Étape précédente",
        "section-intro-solutions-title-EN": "OCTO and <br />API Management <br />solutions",
        "section-intro-solutions-title-FR": "OCTO et <br />l'API Management",
        "section-intro-solutions-subtitle-EN": "Over the years OCTO has acquired the role of opinion leader on API subjects, thanks to experience gathered by consultant teams on the field, when designing and bulding APIs.",
        "section-intro-solutions-subtitle-FR": "Si OCTO a développé au fil des ans un positionnement de leader d’opinion, c’est grâce à l'expérience de nos consultants aquise sur le terrain, avec nos clients, lors de la mise en oeuvre d'API.",
        "section-intro-comparateur-title-EN": "The API Management<br />solutions comparator",
        "section-intro-comparateur-title-FR": "Comparateur de solutions d'API Management",
        "section-intro-comparateur-subtitle-EN": "Compare APIM solutions on key features and quickly spot their strengths and weaknesses.",
        "section-intro-comparateur-subtitle-FR": "Comparez les solutions APIM sur des fonctionnalités clés pour repérer rapidement leurs forces et faiblesses.",
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
                }, {
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
            "fail": "DIY",
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
    },
    {
        "id": "APIGEE",
        "name": "Apigee",
        "description-EN": "<a href=\"https://cloud.google.com/apigee/?hl=en\" target=\"_blank\">Apigee</a> is a cloud-based API management platform bought by Google in 2016. It provides security and analytics for APIs.",
        "description-FR": "<a href=\"https://cloud.google.com/apigee/?hl=fr\" target=\"_blank\">Apigee</a> est une plateforme d'API management orientée cloud, permettant de sécuriser et de manager des APIs, fondée en 2004 sous le nom de Sonoa Systems. Apigee a été rachetée par Google en 2016.",
        "website": "https://cloud.google.com/apigee/?hl=en",
        "logo": "./conf/apim/apigee-logo.png",
    },
    {
        "id": "AWS",
        "name": "Amazon API Gateway",
        "description-EN": "<a href=\"https://aws.amazon.com/what-is-aws/\" target=\"_blank\">Amazon Web Services (AWS)</a> offers a cloud-only solution <a href=\"https://aws.amazon.com/api-gateway/\" target=\"_blank\">Amazon API Gateway</a> that allow developers to create, publish, secure, limit access and monitor APIs at any scale. The Gateway act as the \"front door\" for applications to access backends data and services (containerized serverless workloads and web applications). Amazon API Gateway is a PAYG (Pay As You Go) solution which complete a vast ecosystem of a cloud leader.",
        "description-FR": "<a href=\"https://aws.amazon.com/fr/what-is-aws/\" target=\"_blank\">Amazon Web Services (AWS)</a> offre une solution « cloud-only » <a href=\"https://aws.amazon.com/fr/api-gateway/\" target=\"_blank\">Amazon API Gateway</a> qui aide les développeurs·euses à créer, publier, sécuriser, limiter l'accès et monitorer des APIs à n'importe quelle échelle. La <i>gateway</i> sert de « porte d'entrée » pour que les applications puissent accéder aux données et services des <i>backends</i> (charges de travail serverless conteneurisées et applications web). Amazon API Gateway est une solution « PAYG » (Pay As You Go) qui complète le vaste écosystème d'un des leaders du cloud.",
        "website": "href=\"https://aws.amazon.com/api-gateway/",
        "logo": "./conf/apim/aws-logo.png",
    },
    {
        "id": "AXWAY",
        "name": "Axway",
        "description-EN": "<a href=\"https://www.axway.com/en/products/api-management\" target\"_blank\">AMPLIFY API Management</a> is a french product owned by Sopra-Steria. At first, it was an ESB (strong B2B integration expertise). It evolved into an API Management solution when Sopra-Steria acquired Vordel in 2011",
        "description-FR": "La solution <a href=\"https://www.axway.com/en/products/api-management\" target\"_blank\">AMPLIFY API Management</a> d'AXWAY est un produit français détenu par Sopra-Steria. Initialement, c'était un ESB (forte expertise d'integration B2B) qui après l'acquisition de la solution d'API Management Vordel en 2011, a évolué vers une solution d'API Management intégrale.",
        "website": "axway.com",
        "logo": "./conf/apim/axway-logo.png",
    },
    {
        "id": "BROADCOM",
        "name": "Broadcom",
        "description-EN": "The API Management solution is one a many solutions sold by Broadcom since the acquisition of CA Technologies in 2018. The solution proposes three software blocks : Layer7 API Gateway, Layer7 API Developer Portal, Layer7 Live API Creator. gateway. It offers cloud-only deployment, fully on-premises deployment and hybrid deployment.",
        "description-FR": "La solution d'API Management fait partie d'une suite de produits proposés par Broadcom après son acquisition de CA Technologies en 2018. La solution repose sur trois briques: Layer7 API Gateway, Layer7 API Developer Portal, Layer7 Live API Creator. Elle propose des modes de déploiement cloud SaaS, on-premises et hybride.",
        "website": "https://www.broadcom.com/info/api-management",
        "logo": "./conf/apim/broadcom-logo.png",
    },
    {
        "id": "GRAVITEE",
        "name": "Gravitee",
        "description-EN": "GRAVITEE is a <i>made in France</i> <a href=\"https://github.com/gravitee-io\" target=\"_blank\">open source</a> API Management (portail développeur/dashboard, API manager et la gateway) and Access Management solution written in Java and TypeScript. ",
        "description-FR": "GRAVITEE est une solution <a href=\"https://github.com/gravitee-io\" target=\"_blank\">open source</a> d'API Management (developer portal/dashboard, API manager & gateway) et d'Access Management <i>made in France</i> écrite en Java et TypeScript.",
        "website": "https://gravitee.io/",
        "logo": "./conf/apim/gravitee-logo.png",
    },
    {
        "id": "IBM",
        "name": "IBM",
        "description-EN": "IBM API Connect is an API Management platform providing solutions such as: API Manager, Gateway, developer portal, Cloud Manager. In 2015, IBM acquired <a href=\"https://github.com/strongloop\" target=\"_blank\">Strongloop</a>, an open-source Node.js API Framework ang gateway. IBM API Connect also integrates IBM's DataPower and allows to use its API gateway widely used in SOA-era. The developer portal is based on the open-source CMS <a href=\"https://www.drupal.org/\" target=\"_blank\">Drupal</a>. API Connect is available both on-premises and as cloud SaaS. IBM has been designated leader of the API Management market by IDC.com in 2018, with 22% of market share.",
        "description-FR": "IBM API Connect est une plateforme d'API Management contenant un ensemble de solutions : API Manager, <i>Gateway</i>, portail développeur, Cloud Manager. En 2015, IBM a fait l'acquisition de <a href=\"https://github.com/strongloop\" target=\"_blank\">Strongloop</a>, un framework API et une <i>gateway</i> open-source développés en Node.js. IBM API Connect intègre également IBM's DataPower et permet d'utiliser ses fonctionnalités de <i>gateway</i>, largement déployées à l'ère SOA. Le portail développeur est basé sur le CMS open-source <a href=\"https://www.drupal.org/\" target=\"_blank\">Drupal</a>. API Connect est proposé en version on-premises et cloud SaaS. En 2018, IDC.com annonce qu'IBM est en position de leader avec 22% de parts de marché.",
        "website": "ibm.com",
        "logo": "./conf/apim/ibm-logo.png",
    },
    {
        "id": "KONG",
        "name": "Kong",
        "description-EN": "Kong Inc. offers a platform built on top of Nginx and Cassandra/PostgreSQL, to manage, monitor and scale API and Microservices. The original product was first developed in 2009 in Milan formely known as Mashape. In 2015 the gateway was open-sourced and is today very popular.",
        "description-FR": "Kong Inc. offre une plateforme du même nom, basée sur Nginx et Cassandra/PostreSQL, pour manager, monitorer et publier des APIs et des Microservices. Le produit a été développé initialement en 2009 à Milan sous le nom de Mashape. En 2015, la <i>gateway</i> a été open-sourcée et est aujourd'hui très populaire.",
        "website": "kong.com",
        "logo": "./conf/apim/kong-logo.png",
    },
    {
        "id": "MICROSOFT",
        "name": "Microsoft",
        "description-EN": "AZURE API Management helps to expose APIs to external, partner, and internal developers to unlock the potential of their data and services. It has been bought by Microsoft in 2013 to Apiphany. It provides different solutions such as analytics, security of APIs, developer portal, etc.",
        "description-FR": "AZURE API Management permet d'exposer des APIs au monde extérieur, à des partenaires et aux développeurs·euses internes. Microsoft a racheté la startup de Washington-D.C. Apiphany en 2013. La solution offre différentes fonctionnalités telles que l'analytics, la sécurisation des ressources, un portail développeur, un module de transformation de services existants via la mise en oeuvre de façades, etc.",
        "website": "https://azure.microsoft.com/en-us/services/api-management/",
        "logo": "./conf/apim/MS-Azure-logo.png",
    },
    {
        "id": "MULESOFT",
        "name": "Mulesoft",
        "description-EN": "MuleSoft, Inc. is a software company headquartered in San Francisco, that provides integration software for connecting applications, data and devices. Started in 2006, the company originally provided a lightweight enterprise service bus and later expanded to provide an integration platform as a service (iPaaS), with API capabilities: a design center to design and build APIs, a management center to analyze, manage, and monitor APIs, a runtime engine for connecting enterprise applications on-premises and to the cloud to eliminate the need for custom point-to-point integration code. In may 2018, Salesforce completed acquisition of MuleSoft.",
        "description-FR": "MuleSoft, Inc. est une société basée à San Francisco, qui fournit une solution d'intégration pour connecter les applications, les données et les terminaux. En 2006, Mulesoft fournie un ESB light puis une plateforme d'intégration \"as a service\" (iPaaS), avec des fonctionnalités de gestion d'APIs : un centre de design pour designer et construire des APIs, un centre de management pour analyser, manager, et monitorer les APIs, un moteur de <i>runtime</i> pour connecter les applications <i>enterprise on-premises</i> ou cloud afin d'éliminer les besoins d'intégration spécifiques point à point. En mai 2018, Mulesoft est acquise par Salesforce.",
        "website": "https://www.mulesoft.com/",
        "logo": "./conf/apim/mulesoft-logo.png",
    },
    {
        "id": "AG",
        "name": "Software AG",
        "description-EN": "Software AG is a German solution vendor who offers a \"Digital Business Platform\" allowing integration, process management, application development, real time analytics, entreprise architecture management. API Management solution offers the following features : gateway & microgateway, developer portal, usage statistics & quotas, secured API publication on the le cloud.",
        "description-FR": "Software AG est un éditeur de logiciel allemand qui offre une solution \"Digital Business Platform\" permettant l‘intégration, la gestion des processus, le développement d’applications adaptatives, l’analytique en temps réel et la gestion d‘architecture d’entreprise. La solution d'API Management propose les fonctionnalités : <i>gateway & microgateway</i>, portail développeur, statistiques d'usage & quotas, publication & sécurisation sur le cloud.",
        "website": "https://www.softwareag.com/be/products/api/default.html",
        "logo": "./conf/apim/SAG-logo.png",
    },
    {
        "id": "TIBCO",
        "name": "TIBCO Cloud™ Mashery® API Management",
        "description-EN": "TIBCO Software Inc. is an American company that provides integration, analytics and event-processing software for companies. Software is a middleware, ESB which focuses on real-time communication for B2B, B2C data transfers. On August 2015, TIBCO acquired Mashery, an API Management solution from Intel.",
        "description-FR": "TIBCO Software Inc. est une entreprise américaine qui fournit une plateforme d'integration, d'analytics et de gestion d'évenements pour les entreprises. Il s'agit d'un middleware ESB aussi bien rencontré en contexte B2B que B2C. En août 2015, TIBCO a racheté la solution d'API Management Mashery à Intel.",
        "website": "https://www.tibco.com/products/api-management",
        "logo": "./conf/apim/tibco-logo.png",
    },
    {
        "id": "TYK",
        "name": "Tyk",
        "description-EN": "Tyk is an open source API Gateway developed in 2014 in London, which offers an API Management Platform with an API Gateway, API Analytics, Developer Portal and API Management Dashboard.",
        "description-FR": "Tyk est une plateforme d'API Management développée initialement à Londres en 2014, qui offre une <i>gateway</i> <a href=\"https://github.com/TykTechnologies/tyk\" target=\"_blank\">open source</a> écrite en Go, un portail développeur et un tableau de bord sur les APIs avec des fonctionnalités d'analytics.",
        "website": "tyk.com",
        "logo": "./conf/apim/tyk-logo.png",
    },
    {
        "id": "WSO2",
        "name": "WSO2",
        "description-EN": "WSO2 is an open-source technology provider founded in 2006. It offers an enterprise platform for integrating application programming interfaces (APIs), applications, and web services locally and across the Internet.",
        "description-FR": "WSO2 est un fournisseur de technologie open-source fondé en 2006. Il offre une plate-forme d'entreprise pour l'intégration d'interfaces de programmation d'applications, d'applications et de services Web localement et sur Internet.",
        "website": "wso2.com",
        "logo": "./conf/apim/WSO2-logo.png",
    }
]


$(document).ready(function () {

    function isMobile() {
        return $(window).width() < 1199;
    }

    var OCTO_APIM_APP = OCTO_APIM_APP || {};

    OCTO_APIM_APP.app = {
        conf: {
            // three json config files to be loaded at init
            cms: conf_cms,
            quizz: conf_quizz,
            vendorSolutions: conf_vendorsolutions
        },
        lang: "FR",
        currentNav: 'NAVQUIZZ',  // default landing page
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
            if ((domSection[key + '-' + this.lang]) != null) {
                return domSection[key + '-' + this.lang];
            } else {
                return domSection[key];
            }
        },
        _setCMSValue: function (selector, section, key) {
            var domSection = this.conf.cms[section];
            $(selector).html(domSection[key + '-' + this.lang]);
        },
        _paralaxHook: function () {
            var baseHeight = 0;
            var decalage = $(window).scrollTop() / 3 - baseHeight;
            $('#home-bg-container div').css('background-position-y', decalage + 'px');
        },
        _resizeVideoContainerHook: function () {
            $('header').fadeIn();
            var windowHeight = $(window).height();
            $('#home-bg-container').css('height', '' + windowHeight + 'px');
            $('#nav-overlay').css('height', '' + windowHeight + 'px');
            if ($(window).width() >= 992) {
                windowHeight -= 200;
            } else if ($(window).width() >= 768) {
                windowHeight -= 50;
            } else {
                windowHeight -= 150;
            }

            if (isMobile()) {
                $('#title-section').css('height', '' + windowHeight + 'px');
                $('#section-quizz').css('height', '' + windowHeight + 'px');
                $('#section-comparateur').css('height', '' + windowHeight + 'px');
            } else {
                $('#title-section').css('height', '' + windowHeight + 'px');
                $('#section-quizz').css('height', '' + windowHeight + 'px');
                $('#section-comparateur').css('height', '' + windowHeight + 'px');
            }
        },
        _stickyMenuHook: function () {
            var menu = $('header');
            var $window = $(window);
            var logoOcto = $('#logo-octo');
            var navbarBrand = $('#button-brand');
            var mobileBrandName = $('#mobile-brand-name');

            var window_top_position = $window.scrollTop();
            if (window_top_position >= 200) {
                menu.addClass('in-view');
                logoOcto.fadeOut();
                navbarBrand.fadeIn();
                mobileBrandName.fadeIn();
            } else {
                menu.removeClass('in-view');
                $('.navbar-collapse').collapse('hide');
                logoOcto.fadeIn();
                navbarBrand.fadeOut();
                mobileBrandName.fadeOut();
            }
        },
        _overlayMenuHook: function () {
            var $window = $(window);

            var window_top_position = $window.scrollTop();
            if (window_top_position >= ($(window).height() / 2)) {
                $('#nav-overlay .blog-link').css('color', '#0e2356');
                $('#nav-overlay .contact-link').css('color', '#0e2356');
            } else {
                $('#nav-overlay .blog-link').css('color', '#FFF');
                $('#nav-overlay .contact-link').css('color', '#FFF');
            }
        },
        _backHistoryHook: function () {
            var back = this.history.shift();
            if (back[0] == 'NAVINTRO') {
                this.displayIntro();
            } else if (back[0] == 'NAVQUIZZ') {
                this.displayQuizz(back[1], back[2]);
            } else {
                this.displayAllSolutions();
            }
        },
        _animateShapes: function () {
            if ($('.shapes').length) {

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
        _reDisplay: function () {
            $('#title-section').hide();
            this.displayHome();
            $('#section-comparateur').hide();
            $('.button-comparateur').removeClass('active');
            switch (this.currentNav) {
                case 'NAVQUIZZ':
                    if (this.hasToDisplayQuizz) {
                        this.displayQuizz(this.quizzId);
                    } else {
                        this.displayIntro();
                    }
                    break;
                case 'NAVBENCHMARK':
                    this.displayAllSolutions();
                    break;
                case "NAVCOMPARATEUR":
                    this.displayComparateur();
                    break;
            }
        },
        displayHome: function () {
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
        displayIntro: function () {
            $('#title-section').hide();
            this._setCMSValue('.button-quizz a', 'home', 'header-menu-quizz');
            this._setCMSValue('.start-quizz-bloc h2', 'home', 'bloc-quizz-title');
            this._setCMSValue('.start-quizz-bloc h3', 'home', 'bloc-quizz-subtitle');
            this._setCMSValue('.solutions-bloc h2', 'home', 'bloc-solutions-title');
            this._setCMSValue('.solutions-bloc h3', 'home', 'bloc-solutions-subtitle');
            this._setCMSValue('.comparateur-bloc h3', 'home', 'bloc-comparateur-subtitle');
            this._setCMSValue('.comparateur-bloc h2', 'home', 'bloc-comparateur-title');
            $("#section-intro").hide();
            // $("#section-intro-solutions").hide();
            // $("#section-intro-comparateur").hide();
            this.quizzId = "ID1";
            $("form").hide();
            $("#section-quizz").hide();
            $("#section-solutions").hide();
            $("#section-comparateur").hide();
            $('.button-comparateur').removeClass('active');


            if ($(window).width() < 768) {
                $("#home-bg").css('background-image', 'url(' + this._getCMSValue('home', 'background-image-mobile') + ')');
            } else {
                $("#home-bg").css('background-image', 'url(' + this._getCMSValue('home', 'background-image') + ')');
            }
            $("#home-bg").removeClass("transparent");
            $("#home-bg-open").addClass("transparent");
            $("#home-bg-solutions").addClass("transparent");
            $("#section-intro").fadeIn();
        },
        displayQuizz: function (id, value) {
            $('#title-section').hide();
            var self = this;
            if (!id) {
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

            if (self.conf.quizz.quizz[id].type == "leaf") {
                var apims = self.conf.quizz.quizz[id].apim;
                var fail = self.conf.quizz.quizz[id].fail;
                if (fail) {
                    self.displayFail(fail);
                    $(".return-button").click(function () {
                        self._backHistoryHook();
                    });
                } else {
                    self.displayQuizzSolutions(apims);
                    $(".return-button").click(function () {
                        self._backHistoryHook();
                    });
                }
            } else {
                $("#form-" + id).show();
                var html = this._generateQuizzBloc(id, value);

                $("#section-quizz").html(html);

                $("input[type=radio]").click(function (e) {
                    e.preventDefault();
                    var current = $(this);
                    var ID = current.attr("id");

                    self.history.unshift(['NAVQUIZZ', id, current.attr("value")]);
                    self.displayQuizz(current.attr("id"), value);
                });

                $(".return-button").click(function () {
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
        start: function () {

            // init quizz form
            var self = this;
            $("section").hide();
            $("input[type=radio]").removeAttr('checked');

            $("#logo-octo").click(function (e) {
                e.preventDefault();
                self.currentNav = 'NAVQUIZZ';
                self.hasToDisplayQuizz = false;
                window.location.hash = '';
                app._reDisplay();
                $(".button-solutions").removeClass("active");
                $(".button-quizz").removeClass("active");
                $(".scroll-to-link").hide();
            });

            $(".button-quizz").click(function (e) {
                e.preventDefault();
                self.history.unshift(['NAVINTRO']);
                window.location.hash = 'display=NAVQUIZZ' + self.lang;
                app.displayQuizz();
                $(".button-solutions").removeClass("active");
                $(".button-quizz").addClass("active");
                $(".scroll-to-link").hide();
            });

            $(".button-solutions").click(function (e) {
                e.preventDefault();
                window.location.hash = 'display=NAVBENCHMARK' + self.lang;
                app.displayAllSolutions();
                $(".button-quizz").removeClass("active");
                $(".button-solutions").addClass("active");
            });

            $(".button-comparateur").click(function (e) {
                e.preventDefault();
                window.location.hash = 'display=NAVCOMPARATEUR' + self.lang;
                // show comparateur sections - for now reuse solutions content
                app.displayComparateur();
                $(".button-quizz").removeClass("active");
                $(".button-solutions").removeClass("active");
                $(".button-comparateur").addClass("active");
            });

            $("#navbar a").click(function (e) {
                $("#bg").fadeIn();
            });

            $(".button-lang-fr").click(function (e) {
                e.preventDefault();
                self.lang = "FR";
                window.location.hash = 'display=' + self.currentNav + 'FR';
                self._reDisplay();
                $(".button-lang-en").removeClass("active");
                $(".button-lang-fr").addClass("active");
            });

            $(".button-lang-en").click(function (e) {
                e.preventDefault();
                self.lang = "EN";
                window.location.hash = 'display=' + self.currentNav + 'EN';
                self._reDisplay();
                $(".button-lang-fr").removeClass("active");
                $(".button-lang-en").addClass("active");
            });

            $("#nav-overlay .scroll-to-link").click(function (e) {
                e.preventDefault();
                var scrollTo = $("#nav-overlay .scroll-to-link").offset().top + 50;
                $('html, body').animate({
                    scrollTop: scrollTo
                }, 200);
            });

            $(".start-quizz-bloc").click(function () {
                self.history.unshift(['NAVINTRO']);
                self.displayQuizz();
                $(".button-solutions").removeClass("active");
                $(".button-quizz").addClass("active");
            });

            $(".solutions-bloc").click(function () {
                app.displayAllSolutions();
                $(".button-quizz").removeClass("active");
                $('.button-comparateur').removeClass('active');
                $(".button-solutions").addClass("active");
            });

            $(".comparateur-bloc").click(function () {
                app.displayComparateur();
                $(".button-quizz").removeClass("active");
                $('.button-comparateur').addClass('active');
                $(".button-solutions").removeClass("active");
            });

            $(".footer-warning a").click(function () {
                $(".footer-warning").hide();
            });

            $("form").submit(function (e) {
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

            $(window).resize(function () {
                self._resizeVideoContainerHook();
            });
            $(window).scroll(function () {
                self._paralaxHook();
                self._stickyMenuHook();
                self._overlayMenuHook();
            });

            console.log("app initialized...");
        },
        displayAllSolutions: function () {
            this.currentNav = 'NAVBENCHMARK';
            $('#title-section').show();
            $('.button-comparateur').removeClass('active');
            $("#section-intro").hide();
            $("#section-quizz").hide();
            $("#home-bg").addClass("transparent");
            $("#home-bg-open").addClass("transparent");
            $("#home-bg-solutions").removeClass("transparent");
            this._setCMSValue('#title-section h1', 'home', 'section-intro-solutions-title');
            this._setCMSValue('#title-section p', 'home', 'section-intro-solutions-subtitle');

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
            $("#section-comparateur").hide();
            $("#section-solutions").fadeIn();
        },

        displayComparateur: function () {
            this.currentNav = 'NAVCOMPARATEUR';
            $('#title-section').show();
            $("#home-bg").addClass("transparent");
            $("#home-bg-open").addClass("transparent");
            $("#home-bg-solutions").removeClass("transparent");
            // reuse the same CMS values as solutions for now
            this._setCMSValue('#title-section h1', 'home', 'section-intro-comparateur-title');
            this._setCMSValue('#title-section p', 'home', 'section-intro-comparateur-subtitle');

            // Hide solutions when showing comparateur and show the static 'A venir' block
            $("#section-solutions").hide();
            // inject comparateur UI into the comparateur block
            var ui = this._buildComparateurUI();
            $('#bloc-comparateur').html('<h2>Comparateur</h2>' + ui);
            $("#section-comparateur").fadeIn();
            this._attachComparateurHandlers();
        },

        _renderStars: function (n) {
            var stars = '';
            for (var i = 1; i <= 5; i++) {
                if (i <= n) stars += '<span class="icon icon-star-full">★</span>';
                else stars += '<span class="icon icon-star-empty">☆</span>';
            }
            return stars;
        },

        _buildComparateurUI: function () {
            // build select options from vendorSolutions
            var options = '';
            Object.keys(conf_apims_notes).forEach(function (vendor) {
                options += '<option value="' + vendor + '">' + vendor + '</option>';
            });

            var html = '';
            html += '<div class="row comparateur-select-row">';
            html += '<div class="col-md-5">';
            html += '<div class="compare-select-wrapper">';
            html += '<label for="compare-left">Solution 1</label>';
            html += '<select id="compare-left" class="form-control">' + options + '</select>';
            html += '</div>';
            html += '</div>';
            html += '<div class="col-md-2 text-center comparateur-vs">';
            html += '<strong>VS</strong>';
            html += '</div>';
            html += '<div class="col-md-5">';
            html += '<div class="compare-select-wrapper">';
            html += '<label for="compare-right">Solution 2</label>';
            html += '<select id="compare-right" class="form-control">' + options + '</select>';
            html += '</div>';
            html += '</div>';
            html += '</div>';

            // features rows (derive from conf_apims_notes first vendor)
            var features = [];
            for (var k in conf_apims_notes) {
                features = Object.keys(conf_apims_notes[k]);
                break;
            }

            var tableHtml = '';
            tableHtml += '<table class="table table-bordered" id="comparateur-table">';
            tableHtml += '<thead><tr><th class="feature-col">Feature</th><th id="col-left" class="solution-col" data-default-label="Solution 1">Solution 1</th><th id="col-right" class="solution-col" data-default-label="Solution 2">Solution 2</th></tr></thead>';
            tableHtml += '<tbody>';
            for (var f = 0; f < features.length; f++) {
                tableHtml += '<tr data-feature="' + features[f] + '">';
                tableHtml += '<td>' + features[f] + '</td>';
                tableHtml += '<td class="val-left">' + this._renderStars(0) + '</td>';
                tableHtml += '<td class="val-right">' + this._renderStars(0) + '</td>';
                tableHtml += '</tr>';
            }
            tableHtml += '</tbody>';
            tableHtml += '</table>';

            html += '<div class="row comparateur-table-row">';
            html += '<div class="col-md-12 comparateur-table-wrapper">';
            html += '<div class="comparateur-table-inner">';
            html += tableHtml;
            html += '</div>';
            html += '</div>';
            html += '</div>';

            html += '<div>';
            html += '<p>Apprenez-en plus sur la méthode de comparaison sur notre <a href="https://blog.octo.com/choisir-une-plateforme-d\'api-management-en-2025--mon-guide-pour-s\'y-retrouver" target="_blank">blog</a>.</p>';
            html += '</div>';

            return html;
        },

        _attachComparateurHandlers: function () {
            var self = this;
            var vendors = Object.keys(conf_apims_notes);

            if (vendors.length) {
                $('#compare-left').val(vendors[0]);
                var second = vendors[0];
                for (var i = 0; i < vendors.length; i++) {
                    if (vendors[i] !== vendors[0]) {
                        second = vendors[i];
                        break;
                    }
                }
                $('#compare-right').val(second);
            }

            var handleChange = function (triggerSource) {
                var left = $('#compare-left').val();
                var right = $('#compare-right').val();

                if (left && right && left === right) {
                    var fallback = '';
                    for (var j = 0; j < vendors.length; j++) {
                        if (vendors[j] !== left) {
                            fallback = vendors[j];
                            break;
                        }
                    }
                    if (triggerSource === 'compare-left') {
                        $('#compare-right').val(fallback);
                        right = $('#compare-right').val();
                    } else {
                        $('#compare-left').val(fallback);
                        left = $('#compare-left').val();
                    }
                }
                self._refreshComparateur(left, right);
            };

            $(document).off('change', '#compare-left');
            $(document).off('change', '#compare-right');
            $(document).on('change', '#compare-left, #compare-right', function () {
                handleChange(this.id);
            });

            self._refreshComparateur($('#compare-left').val(), $('#compare-right').val());
        },
        _refreshComparateur: function (left, right) {
            left = left || '';
            right = right || '';
            this._updateComparateurHeader('#col-left', left);
            this._updateComparateurHeader('#col-right', right);
            this._updateComparateurOptionStates(left, right);
            this._updateComparateurTable(left, right);
        },
        _updateComparateurHeader: function (selector, label) {
            var $target = $(selector);
            var defaultLabel = $target.data('defaultLabel') || '';
            var vendor = this._findVendorByLabel(label);
            var title = label || defaultLabel;
            var logo = vendor && vendor.logo ? vendor.logo : '';
            var html = '<div class="compare-header">';
            if (logo) {
                html += '<img src="' + logo + '" alt="' + title + ' logo" title="' + title + '">';
            }
            else {
                html += '<span>' + title + '</span>';
            }
            html += '</div>';
            $target.html(html);
        },
        _updateComparateurOptionStates: function (left, right) {
            var $left = $('#compare-left option');
            var $right = $('#compare-right option');
            $left.prop('disabled', false);
            $right.prop('disabled', false);
            if (right) {
                $left.filter('[value="' + right + '"]').prop('disabled', true);
            }
            if (left) {
                $right.filter('[value="' + left + '"]').prop('disabled', true);
            }
        },
        _updateComparateurTable: function (left, right) {
            var self = this;
            $('#comparateur-table tbody tr').each(function () {
                var feature = $(this).data('feature');
                var leftNote = (conf_apims_notes[left] && conf_apims_notes[left][feature]) ? conf_apims_notes[left][feature] : 0;
                var rightNote = (conf_apims_notes[right] && conf_apims_notes[right][feature]) ? conf_apims_notes[right][feature] : 0;
                $(this).find('.val-left').html(self._renderStars(leftNote));
                $(this).find('.val-right').html(self._renderStars(rightNote));
            });
        },
        _findVendorByLabel: function (label) {
            if (!label) {
                return null;
            }
            var normalized = label.toLowerCase();
            for (var i = 0; i < this.conf.vendorSolutions.length; i++) {
                var vendor = this.conf.vendorSolutions[i];
                var name = (vendor.name || '').toLowerCase();
                var id = (vendor.id || '').toLowerCase();
                if (name) {
                    if (normalized === name || normalized.indexOf(name) !== -1 || name.indexOf(normalized) !== -1) {
                        return vendor;
                    }
                }
                if (id) {
                    if (normalized === id || normalized.indexOf(id) !== -1 || id.indexOf(normalized) !== -1) {
                        return vendor;
                    }
                }
            }
            return null;
        },
        displayFail: function (failID) {
            var fail = null;
            for (var i = 0; i < this.conf.quizz.fails.length; i++) {
                if (this.conf.quizz.fails[i].id == failID) {
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
        displayQuizzSolutions: function (apims) {
            this.apims = apims;
            var self = this;
            // var htmlapims = '<div class="row"><div class="title">' + this._getCMSValue('home', 'section-quizz-title') + '</div></div>';
            var htmlapims = '<div class="row"><h2 class="title">' + this._getCMSValue('home', 'section-quizz-title') + '</h2></div>';
            htmlapims += '<div class="row">';
            for (var i = 0; i < apims.length; i++) {
                var apim = apims[i];
                for (var j = 0; j < self.conf.vendorSolutions.length; j++) {
                    if (apim == self.conf.vendorSolutions[j].id) {
                        htmlapims += self._generateSummarySolutionBloc(self.conf.vendorSolutions[j]);
                        if (i != 0 && (i + 1) % 3 === 0) {
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
            apims.forEach(function (apim) {
                var scrollTo = "#bloc-solution-" + apim;
                $("#" + apim + "").click(function (e) {
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: $(scrollTo).offset().top - 70
                    }, 200);

                });
            });

            $(".scroll-to-link").fadeIn();
        },
        displaySolutionsDetailed: function (apims) {
            this.apims = apims;
            var self = this;
            var htmlapims = '';
            for (var i = 0; i < apims.length; i++) {
                var apim = apims[i];
                for (var j = 0; j < self.conf.vendorSolutions.length; j++) {
                    if (apim == self.conf.vendorSolutions[j].id) {
                        htmlapims += '<div class="row">';
                        htmlapims += self._generateDetailedSolutionBloc(self.conf.vendorSolutions[j]);
                        htmlapims += '</div>';
                    }
                }
            }

            // Always inject detailed solution blocks into the solutions placeholder.
            $("#solutionsplaceholder").html(htmlapims);

            // show the corresponding section
            // Only show/hide the solutions section here; comparateur is a static section handled elsewhere.
            $("#section-solutions").fadeIn();
            $("#solutionsplaceholder").fadeIn();

            $(".scroll-to-link").fadeIn();
        },
        _generateQuizzBloc: function (quizzID, value) {
            var self = this;
            var question = this.conf.quizz.quizz[quizzID];

            var html = '<div class="row">';
            html += '<div class="col-md-6">';
            html += '<div class="bloc">';

            html += '<form id="form-' + quizzID + '" class="needs-validation">';
            html += '<h2 class="mb-3">' + question["question-" + self.lang] + '</h2>';
            for (var i = 0; i < question.answers.length; i++) {
                var answer = question.answers[i];
                var id = 'ID' + answer.goto + '';
                html += '<div class="form-check">';
                if (answer.goto == value) {
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
        _generateSummarySolutionBloc: function (apim) {
            var html = '<div class="col-md-4">';
            html += '<div id="' + apim.id + '" class="bloc bloc-apim">';
            html += '<div class="logo-container"><img src="' + apim.logo + '" alt="' + apim.name + '"></div>';
            html += '<h3>' + this._getCMSValue('home', 'bloc-solutions-button-knowmore') + '</h3>';
            html += '</div>';
            html += '</div>';
            return html;
        },
        _generateDetailedSolutionBloc: function (apim) {

            var html = '';
            html += '<div class="col-md-12">';
            html += '<div class="bloc-edito" id="bloc-solution-' + apim.id + '">';
            html += '<h2>' + apim.name + '</h2>';
            html += '<p>' + apim["description-" + this.lang] + '</p>';
            html += '</div>';
            html += '</div>';

            return html;
        }
    }

    var app = OCTO_APIM_APP.app || new OCTO_APIM_APP.app();
    app.start();
});
