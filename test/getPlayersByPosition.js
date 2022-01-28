const   expect      = require('chai').expect,
        request     = require('supertest'),
        basicSetup  = require('../helper/basicSetup'),
        app         = require('../app'),
        Student     = require('../models/plantel')


describe('GET: /teams/144/players route to get all player in a team', () => {
  let dataToMatch = [
    {
        "equipo": {
            "_attributes": {
                "id": "143",
                "nombre": "Audax Italiano",
                "sigla": "AUD",
                "paisId": "6",
                "paisNombre": "Chile",
                "tipo": "club"
            },
            "jugadores": [
                {
                    "_attributes": {
                        "id": "224914"
                    },
                    "nombre": {
                        "_text": "Tomás Alejandro"
                    },
                    "apellido": {
                        "_text": "Ahumada Oteiza"
                    },
                    "nombreCorto": {
                        "_text": "Tomás Ahumada"
                    },
                    "fechaNacimiento": {
                        "_text": "2001-06-24"
                    },
                    "edad": {
                        "_text": "18"
                    },
                    "peso": {
                        "_text": "74"
                    },
                    "altura": {
                        "_text": "181"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "25"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "105811"
                    },
                    "nombre": {
                        "_text": "José Antonio"
                    },
                    "apellido": {
                        "_text": "Devecchi"
                    },
                    "nombreCorto": {
                        "_text": "José Devecchi"
                    },
                    "fechaNacimiento": {
                        "_text": "1995-07-09"
                    },
                    "edad": {
                        "_text": "24"
                    },
                    "peso": {
                        "_text": "81"
                    },
                    "altura": {
                        "_text": "188"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "12"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "1"
                        },
                        "_text": "Argentina"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "210196"
                    },
                    "nombre": {
                        "_text": "Joaquín Andrés"
                    },
                    "apellido": {
                        "_text": "García Epull"
                    },
                    "nombreCorto": {
                        "_text": "Joaquín García"
                    },
                    "fechaNacimiento": {
                        "_text": "1999-05-06"
                    },
                    "edad": {
                        "_text": "20"
                    },
                    "peso": {
                        "_text": "82"
                    },
                    "altura": {
                        "_text": "178"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "13"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "94971"
                    },
                    "nombre": {
                        "_text": "Joaquín Emanuel"
                    },
                    "apellido": {
                        "_text": "Muñoz Almarza"
                    },
                    "nombreCorto": {
                        "_text": "Joaquín Muñoz"
                    },
                    "fechaNacimiento": {
                        "_text": "1990-12-28"
                    },
                    "edad": {
                        "_text": "29"
                    },
                    "peso": {
                        "_text": "82"
                    },
                    "altura": {
                        "_text": "181"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "1"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                }
            ]
        }
    },
    {
        "equipo": {
            "_attributes": {
                "id": "144",
                "nombre": "Cobresal",
                "sigla": "COB",
                "paisId": "6",
                "paisNombre": "Chile",
                "tipo": "club"
            },
            "jugadores": [
                {
                    "_attributes": {
                        "id": "18864"
                    },
                    "nombre": {
                        "_text": "Jorge Luis"
                    },
                    "apellido": {
                        "_text": "Deschamps Méndez"
                    },
                    "nombreCorto": {
                        "_text": "Jorge Deschamps"
                    },
                    "fechaNacimiento": {
                        "_text": "1984-05-13"
                    },
                    "edad": {
                        "_text": "35"
                    },
                    "peso": {
                        "_text": "77"
                    },
                    "altura": {
                        "_text": "183"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "1"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "16892"
                    },
                    "nombre": {
                        "_text": "Sebastián Alberto"
                    },
                    "apellido": {
                        "_text": "López"
                    },
                    "fechaNacimiento": {
                        "_text": "1985-09-14"
                    },
                    "edad": {
                        "_text": "34"
                    },
                    "peso": {
                        "_text": "85"
                    },
                    "altura": {
                        "_text": "187"
                    },
                    "apodo": {
                        "_text": "Sebastián López"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "22"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "1"
                        },
                        "_text": "Argentina"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "16167"
                    },
                    "nombre": {
                        "_text": "Leandro"
                    },
                    "apellido": {
                        "_text": "Requena"
                    },
                    "nombreCorto": {
                        "_text": "Leandro Requena"
                    },
                    "fechaNacimiento": {
                        "_text": "1997-07-29"
                    },
                    "edad": {
                        "_text": "22"
                    },
                    "peso": {
                        "_text": "81"
                    },
                    "altura": {
                        "_text": "187"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "1"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "1"
                        },
                        "_text": "Argentina"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "214965"
                    },
                    "nombre": {
                        "_text": "Ariki Henua"
                    },
                    "apellido": {
                        "_text": "Yáñez Cruz"
                    },
                    "nombreCorto": {
                        "_text": "Ariki Yáñez"
                    },
                    "fechaNacimiento": {
                        "_text": "1999-06-06"
                    },
                    "edad": {
                        "_text": "20"
                    },
                    "peso": {
                        "_text": "73"
                    },
                    "altura": {
                        "_text": "184"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "12"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                }
            ]
        }
    },
    {
        "equipo": {
            "_attributes": {
                "id": "95",
                "nombre": "Colo Colo",
                "sigla": "COL",
                "paisId": "6",
                "paisNombre": "Chile",
                "tipo": "club"
            },
            "jugadores": [
                {
                    "_attributes": {
                        "id": "88413"
                    },
                    "nombre": {
                        "_text": "Brayan Josué"
                    },
                    "apellido": {
                        "_text": "Cortés Fernández"
                    },
                    "nombreCorto": {
                        "_text": "Brayan Cortés"
                    },
                    "fechaNacimiento": {
                        "_text": "1995-03-11"
                    },
                    "edad": {
                        "_text": "25"
                    },
                    "peso": {
                        "_text": "87"
                    },
                    "altura": {
                        "_text": "186"
                    },
                    "apodo": {
                        "_text": "Brayan Cortés"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "1"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "159",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "208067"
                    },
                    "nombre": {
                        "_text": "Julio Esteban"
                    },
                    "apellido": {
                        "_text": "Fierro Diaz"
                    },
                    "nombreCorto": {
                        "_text": "Julio Fierro"
                    },
                    "fechaNacimiento": {
                        "_text": "2002-04-09"
                    },
                    "edad": {
                        "_text": "18"
                    },
                    "peso": {
                        "_text": "82"
                    },
                    "altura": {
                        "_text": "184"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "24"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "8158",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "45517"
                    },
                    "nombre": {
                        "_text": "Darío Esteban"
                    },
                    "apellido": {
                        "_text": "Melo Pulgar"
                    },
                    "nombreCorto": {
                        "_text": "Darío Melo"
                    },
                    "fechaNacimiento": {
                        "_text": "1993-03-24"
                    },
                    "edad": {
                        "_text": "27"
                    },
                    "peso": {
                        "_text": "74"
                    },
                    "altura": {
                        "_text": "178"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "25"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "159",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "49408"
                    },
                    "nombre": {
                        "_text": "Miguel Ángel"
                    },
                    "apellido": {
                        "_text": "Pinto"
                    },
                    "nombreCorto": {
                        "_text": "Miguel Pinto"
                    },
                    "fechaNacimiento": {
                        "_text": "1983-07-04"
                    },
                    "edad": {
                        "_text": "36"
                    },
                    "peso": {
                        "_text": "82"
                    },
                    "altura": {
                        "_text": "183"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "12"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "159",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                }
            ]
        }
    },
    {
        "equipo": {
            "_attributes": {
                "id": "145",
                "nombre": "Coquimbo Unido",
                "sigla": "COQ",
                "paisId": "6",
                "paisNombre": "Chile",
                "tipo": "club"
            },
            "jugadores": [
                {
                    "_attributes": {
                        "id": "169184"
                    },
                    "nombre": {
                        "_text": "Matías Nicolás"
                    },
                    "apellido": {
                        "_text": "Cano"
                    },
                    "nombreCorto": {
                        "_text": "Matías Cano"
                    },
                    "fechaNacimiento": {
                        "_text": "1986-04-20"
                    },
                    "edad": {
                        "_text": "34"
                    },
                    "peso": {
                        "_text": "67"
                    },
                    "altura": {
                        "_text": "180"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "1"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "1"
                        },
                        "_text": "Argentina"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "76046"
                    },
                    "nombre": {
                        "_text": "Guillermo Enrique"
                    },
                    "apellido": {
                        "_text": "Orellana Riquelme"
                    },
                    "nombreCorto": {
                        "_text": "Guillermo Orellana"
                    },
                    "fechaNacimiento": {
                        "_text": "1986-07-29"
                    },
                    "edad": {
                        "_text": "33"
                    },
                    "peso": {
                        "_text": "76"
                    },
                    "altura": {
                        "_text": "179"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "25"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "105699"
                    },
                    "nombre": {
                        "_text": "Daniel Enrique"
                    },
                    "apellido": {
                        "_text": "Retamal Vargas"
                    },
                    "nombreCorto": {
                        "_text": "Daniel Retamal"
                    },
                    "fechaNacimiento": {
                        "_text": "1995-06-17"
                    },
                    "edad": {
                        "_text": "24"
                    },
                    "peso": {
                        "_text": "68"
                    },
                    "altura": {
                        "_text": "178"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "12"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                }
            ]
        }
    },
    {
        "equipo": {
            "_attributes": {
                "id": "941",
                "nombre": "Curicó Unido",
                "sigla": "CUR",
                "paisId": "6",
                "paisNombre": "Chile",
                "tipo": "club"
            },
            "jugadores": [
                {
                    "_attributes": {
                        "id": "39354"
                    },
                    "nombre": {
                        "_text": "Fabián Alfredo"
                    },
                    "apellido": {
                        "_text": "Cerda Valdés"
                    },
                    "nombreCorto": {
                        "_text": "Fabián Cerda"
                    },
                    "fechaNacimiento": {
                        "_text": "1989-02-07"
                    },
                    "edad": {
                        "_text": "31"
                    },
                    "peso": {
                        "_text": "83"
                    },
                    "altura": {
                        "_text": "183"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "12"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "4320"
                    },
                    "nombre": {
                        "_text": "Paulo Andrés"
                    },
                    "apellido": {
                        "_text": "Garcés Contreras"
                    },
                    "nombreCorto": {
                        "_text": "Paulo Garcés"
                    },
                    "ladoHabil": {
                        "_text": "derecho"
                    },
                    "fechaNacimiento": {
                        "_text": "1984-08-02"
                    },
                    "edad": {
                        "_text": "35"
                    },
                    "peso": {
                        "_text": "72"
                    },
                    "altura": {
                        "_text": "182"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "1"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "159",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "109297"
                    },
                    "nombre": {
                        "_text": "Gonzalo Santiago"
                    },
                    "apellido": {
                        "_text": "Mall Núñez"
                    },
                    "nombreCorto": {
                        "_text": "Gonzalo Mall"
                    },
                    "fechaNacimiento": {
                        "_text": "1991-07-25"
                    },
                    "edad": {
                        "_text": "28"
                    },
                    "peso": {
                        "_text": "84"
                    },
                    "altura": {
                        "_text": "178"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "30"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "224955"
                    },
                    "nombre": {
                        "_text": "Tomás"
                    },
                    "apellido": {
                        "_text": "Vergara"
                    },
                    "nombreCorto": {
                        "_text": "Tomás Vergara"
                    },
                    "fechaNacimiento": {
                        "_text": "2002-09-24"
                    },
                    "edad": {
                        "_text": "17"
                    },
                    "peso": {
                        "_text": "70"
                    },
                    "altura": {
                        "_text": "182"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "22"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                }
            ]
        }
    },
    {
        "equipo": {
            "_attributes": {
                "id": "263",
                "nombre": "D. Antofagasta",
                "sigla": "ANT",
                "paisId": "6",
                "paisNombre": "Chile",
                "tipo": "club"
            },
            "jugadores": [
                {
                    "_attributes": {
                        "id": "129892"
                    },
                    "nombre": {
                        "_text": "Nicolás Fernando"
                    },
                    "apellido": {
                        "_text": "Araya Bruna"
                    },
                    "nombreCorto": {
                        "_text": "Nicolás Araya"
                    },
                    "fechaNacimiento": {
                        "_text": "1999-06-06"
                    },
                    "edad": {
                        "_text": "20"
                    },
                    "peso": {
                        "_text": "73"
                    },
                    "altura": {
                        "_text": "176"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "25"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "82300"
                    },
                    "nombre": {
                        "_text": "José Ignacio"
                    },
                    "apellido": {
                        "_text": "González Catalán"
                    },
                    "nombreCorto": {
                        "_text": "Ignacio González"
                    },
                    "fechaNacimiento": {
                        "_text": "1989-12-02"
                    },
                    "edad": {
                        "_text": "30"
                    },
                    "peso": {
                        "_text": "80"
                    },
                    "altura": {
                        "_text": "187"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "1"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "2653"
                    },
                    "nombre": {
                        "_text": "Fernando Javier"
                    },
                    "apellido": {
                        "_text": "Hurtado Pérez"
                    },
                    "nombreCorto": {
                        "_text": "Fernando Hurtado"
                    },
                    "fechaNacimiento": {
                        "_text": "1983-04-05"
                    },
                    "edad": {
                        "_text": "37"
                    },
                    "peso": {
                        "_text": "92"
                    },
                    "altura": {
                        "_text": "188"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "12"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "159",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "199246"
                    },
                    "nombre": {
                        "_text": "Juan"
                    },
                    "apellido": {
                        "_text": "Sandoval Cisternas"
                    },
                    "nombreCorto": {
                        "_text": "Juan Cisternas"
                    },
                    "fechaNacimiento": {
                        "_text": "2002-08-25"
                    },
                    "edad": {
                        "_text": "17"
                    },
                    "peso": {
                        "_text": "75"
                    },
                    "altura": {
                        "_text": "184"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "30"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                }
            ]
        }
    },
    {
        "equipo": {
            "_attributes": {
                "id": "943",
                "nombre": "Deportes Iquique",
                "sigla": "DIQ",
                "paisId": "6",
                "paisNombre": "Chile",
                "tipo": "club"
            },
            "jugadores": [
                {
                    "_attributes": {
                        "id": "195418"
                    },
                    "nombre": {
                        "_text": "Julio Junior"
                    },
                    "apellido": {
                        "_text": "Bórquez Henríquez"
                    },
                    "nombreCorto": {
                        "_text": "Julio Bórquez"
                    },
                    "fechaNacimiento": {
                        "_text": "2000-04-20"
                    },
                    "edad": {
                        "_text": "20"
                    },
                    "peso": {
                        "_text": "78"
                    },
                    "altura": {
                        "_text": "175"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "12"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "635",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "190646"
                    },
                    "nombre": {
                        "_text": "Maximiliano"
                    },
                    "apellido": {
                        "_text": "Mori Calderón"
                    },
                    "nombreCorto": {
                        "_text": "Maximiliano Mori"
                    },
                    "fechaNacimiento": {
                        "_text": "1997-11-11"
                    },
                    "edad": {
                        "_text": "22"
                    },
                    "peso": {
                        "_text": "70"
                    },
                    "altura": {
                        "_text": "185"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "32"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "162708"
                    },
                    "nombre": {
                        "_text": "Sebastián Andrés"
                    },
                    "apellido": {
                        "_text": "Pérez Kirby"
                    },
                    "nombreCorto": {
                        "_text": "Sebastián Pérez"
                    },
                    "fechaNacimiento": {
                        "_text": "1990-12-02"
                    },
                    "edad": {
                        "_text": "29"
                    },
                    "peso": {
                        "_text": "76"
                    },
                    "altura": {
                        "_text": "180"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "25"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "96942"
                    },
                    "nombre": {
                        "_text": "Luis Ignacio"
                    },
                    "apellido": {
                        "_text": "Sotomayor Orrego"
                    },
                    "nombreCorto": {
                        "_text": "Luis Sotomayor"
                    },
                    "fechaNacimiento": {
                        "_text": "1996-12-04"
                    },
                    "edad": {
                        "_text": "23"
                    },
                    "peso": {
                        "_text": "70"
                    },
                    "altura": {
                        "_text": "180"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "1"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                }
            ]
        }
    },
    {
        "equipo": {
            "_attributes": {
                "id": "150",
                "nombre": "D. La Serena",
                "sigla": "SER",
                "paisId": "6",
                "paisNombre": "Chile",
                "tipo": "club"
            },
            "jugadores": [
                {
                    "_attributes": {
                        "id": "14851"
                    },
                    "nombre": {
                        "_text": "Pedro Alex"
                    },
                    "apellido": {
                        "_text": "Carrizo Córdova"
                    },
                    "nombreCorto": {
                        "_text": "Pedro Carrizo"
                    },
                    "fechaNacimiento": {
                        "_text": "1980-11-09"
                    },
                    "edad": {
                        "_text": "39"
                    },
                    "peso": {
                        "_text": "80"
                    },
                    "altura": {
                        "_text": "186"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "25"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "133603"
                    },
                    "nombre": {
                        "_text": "Gustavo"
                    },
                    "apellido": {
                        "_text": "Fuentealba"
                    },
                    "nombreCorto": {
                        "_text": "Gustavo Fuentealba"
                    },
                    "fechaNacimiento": {
                        "_text": "1994-10-31"
                    },
                    "edad": {
                        "_text": "25"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "1"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "113934"
                    },
                    "nombre": {
                        "_text": "Zacarías Orlando"
                    },
                    "apellido": {
                        "_text": "López González"
                    },
                    "nombreCorto": {
                        "_text": "Zacarías López"
                    },
                    "fechaNacimiento": {
                        "_text": "1998-06-30"
                    },
                    "edad": {
                        "_text": "21"
                    },
                    "peso": {
                        "_text": "70"
                    },
                    "altura": {
                        "_text": "183"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "17"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "635",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "246180"
                    },
                    "nombre": {
                        "_text": "Alexis Nicolás"
                    },
                    "apellido": {
                        "_text": "Nocetti"
                    },
                    "nombreCorto": {
                        "_text": "Alexis Nocetti"
                    },
                    "fechaNacimiento": {
                        "_text": "2000-08-18"
                    },
                    "edad": {
                        "_text": "19"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "30"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "8096"
                    },
                    "nombre": {
                        "_text": "Raúl Alejandro"
                    },
                    "apellido": {
                        "_text": "Olivares Gálvez"
                    },
                    "fechaNacimiento": {
                        "_text": "1988-04-17"
                    },
                    "edad": {
                        "_text": "32"
                    },
                    "peso": {
                        "_text": "80"
                    },
                    "altura": {
                        "_text": "187"
                    },
                    "apodo": {
                        "_text": "Raúl Olivares"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "13"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "1685",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                }
            ]
        }
    },
    {
        "equipo": {
            "_attributes": {
                "id": "148",
                "nombre": "Everton",
                "sigla": "EVE",
                "paisId": "6",
                "paisNombre": "Chile",
                "tipo": "club"
            },
            "jugadores": [
                {
                    "_attributes": {
                        "id": "2299"
                    },
                    "nombre": {
                        "_text": "Johnny Cristián"
                    },
                    "apellido": {
                        "_text": "Herrera Muño"
                    },
                    "nombreCorto": {
                        "_text": "Johnny Herrera"
                    },
                    "ladoHabil": {
                        "_text": "derecho"
                    },
                    "fechaNacimiento": {
                        "_text": "1981-05-09"
                    },
                    "edad": {
                        "_text": "38"
                    },
                    "peso": {
                        "_text": "88"
                    },
                    "altura": {
                        "_text": "184"
                    },
                    "apodo": {
                        "_text": "Johnny Herrera"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "25"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "159",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "231083"
                    },
                    "nombre": {
                        "_text": "Jorge"
                    },
                    "apellido": {
                        "_text": "Peña"
                    },
                    "nombreCorto": {
                        "_text": "Jorge Peña"
                    },
                    "fechaNacimiento": {
                        "_text": "2000-07-11"
                    },
                    "edad": {
                        "_text": "19"
                    },
                    "peso": {
                        "_text": "75"
                    },
                    "altura": {
                        "_text": "180"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "1"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "224341"
                    },
                    "nombre": {
                        "_text": "Camilo"
                    },
                    "apellido": {
                        "_text": "Rozas"
                    },
                    "fechaNacimiento": {
                        "_text": "2001-01-01"
                    },
                    "edad": {
                        "_text": "19"
                    },
                    "peso": {
                        "_text": "83"
                    },
                    "altura": {
                        "_text": "185"
                    },
                    "apodo": {
                        "_text": "Camilo Rozas"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "12"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "73404"
                    },
                    "nombre": {
                        "_text": "Luis Rodrigo"
                    },
                    "apellido": {
                        "_text": "Santelices Tello"
                    },
                    "nombreCorto": {
                        "_text": "Luis Santelices"
                    },
                    "fechaNacimiento": {
                        "_text": "1985-10-29"
                    },
                    "edad": {
                        "_text": "34"
                    },
                    "peso": {
                        "_text": "77"
                    },
                    "altura": {
                        "_text": "183"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "30"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                }
            ]
        }
    },
    {
        "equipo": {
            "_attributes": {
                "id": "149",
                "nombre": "Huachipato",
                "sigla": "HUA",
                "paisId": "6",
                "paisNombre": "Chile",
                "tipo": "club"
            },
            "jugadores": [
                {
                    "_attributes": {
                        "id": "119332"
                    },
                    "nombre": {
                        "_text": "Gabriel Jesús"
                    },
                    "apellido": {
                        "_text": "Castellón Velazque"
                    },
                    "nombreCorto": {
                        "_text": "Gabriel Castellón"
                    },
                    "fechaNacimiento": {
                        "_text": "1993-09-08"
                    },
                    "edad": {
                        "_text": "26"
                    },
                    "peso": {
                        "_text": "78"
                    },
                    "altura": {
                        "_text": "190"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "25"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "159",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "247429"
                    },
                    "nombre": {
                        "_text": "Martín Cristián"
                    },
                    "apellido": {
                        "_text": "Parra Plaza"
                    },
                    "nombreCorto": {
                        "_text": "Martín Parra"
                    },
                    "fechaNacimiento": {
                        "_text": "2000-09-01"
                    },
                    "edad": {
                        "_text": "19"
                    },
                    "peso": {
                        "_text": "78"
                    },
                    "altura": {
                        "_text": "185"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "12"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "162897"
                    },
                    "nombre": {
                        "_text": "Yerko Andrés"
                    },
                    "apellido": {
                        "_text": "Urra Cortés"
                    },
                    "nombreCorto": {
                        "_text": "Yerko Urra"
                    },
                    "fechaNacimiento": {
                        "_text": "1996-07-09"
                    },
                    "edad": {
                        "_text": "23"
                    },
                    "peso": {
                        "_text": "88"
                    },
                    "altura": {
                        "_text": "190"
                    },
                    "apodo": {
                        "_text": "Yerko Urra"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "1"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "159",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                }
            ]
        }
    },
    {
        "equipo": {
            "_attributes": {
                "id": "264",
                "nombre": "O'Higgins",
                "sigla": "OHI",
                "paisId": "6",
                "paisNombre": "Chile",
                "tipo": "club"
            },
            "jugadores": [
                {
                    "_attributes": {
                        "id": "144501"
                    },
                    "nombre": {
                        "_text": "Augusto Martín"
                    },
                    "apellido": {
                        "_text": "Batalla Barga"
                    },
                    "nombreCorto": {
                        "_text": "Augusto Batalla"
                    },
                    "fechaNacimiento": {
                        "_text": "1996-04-30"
                    },
                    "edad": {
                        "_text": "23"
                    },
                    "peso": {
                        "_text": "87"
                    },
                    "altura": {
                        "_text": "185"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "13"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "1"
                        },
                        "_text": "Argentina"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "208068"
                    },
                    "nombre": {
                        "_text": "Diego Alberto"
                    },
                    "apellido": {
                        "_text": "Carreño Parada"
                    },
                    "nombreCorto": {
                        "_text": "Diego Carreño"
                    },
                    "fechaNacimiento": {
                        "_text": "2002-04-26"
                    },
                    "edad": {
                        "_text": "17"
                    },
                    "peso": {
                        "_text": "67"
                    },
                    "altura": {
                        "_text": "173"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "1"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "1668",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "245982"
                    },
                    "nombre": {
                        "_text": "Luis"
                    },
                    "apellido": {
                        "_text": "Kovacic"
                    },
                    "nombreCorto": {
                        "_text": "Luis Kovacic"
                    },
                    "fechaNacimiento": {
                        "_text": "2000-02-10"
                    },
                    "edad": {
                        "_text": "20"
                    },
                    "peso": {
                        "_text": "85"
                    },
                    "altura": {
                        "_text": "187"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "12"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "1"
                        },
                        "_text": "Argentina"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "113944"
                    },
                    "nombre": {
                        "_text": "Luis Alfonso"
                    },
                    "apellido": {
                        "_text": "Ureta Medina"
                    },
                    "nombreCorto": {
                        "_text": "Luis Ureta"
                    },
                    "fechaNacimiento": {
                        "_text": "1999-03-08"
                    },
                    "edad": {
                        "_text": "21"
                    },
                    "peso": {
                        "_text": "79"
                    },
                    "altura": {
                        "_text": "177"
                    },
                    "apodo": {
                        "_text": "Luis Ureta"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "16"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "8158",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                }
            ]
        }
    },
    {
        "equipo": {
            "_attributes": {
                "id": "151",
                "nombre": "Palestino",
                "sigla": "PAL",
                "paisId": "6",
                "paisNombre": "Chile",
                "tipo": "club"
            },
            "jugadores": [
                {
                    "_attributes": {
                        "id": "195813"
                    },
                    "nombre": {
                        "_text": "Matías Ignacio"
                    },
                    "apellido": {
                        "_text": "Borquez Lizana"
                    },
                    "nombreCorto": {
                        "_text": "Matías Borquez"
                    },
                    "fechaNacimiento": {
                        "_text": "1998-08-19"
                    },
                    "edad": {
                        "_text": "21"
                    },
                    "peso": {
                        "_text": "82"
                    },
                    "altura": {
                        "_text": "193"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "68878"
                    },
                    "nombre": {
                        "_text": "Cristián Edward"
                    },
                    "apellido": {
                        "_text": "Guerra Torres"
                    },
                    "nombreCorto": {
                        "_text": "Cristián Guerra"
                    },
                    "fechaNacimiento": {
                        "_text": "1994-08-09"
                    },
                    "edad": {
                        "_text": "25"
                    },
                    "peso": {
                        "_text": "82"
                    },
                    "altura": {
                        "_text": "183"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "25"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "106540"
                    },
                    "nombre": {
                        "_text": "Gastón"
                    },
                    "apellido": {
                        "_text": "Guruceaga Fagúndez"
                    },
                    "fechaNacimiento": {
                        "_text": "1995-03-15"
                    },
                    "edad": {
                        "_text": "25"
                    },
                    "peso": {
                        "_text": "82"
                    },
                    "altura": {
                        "_text": "194"
                    },
                    "apodo": {
                        "_text": "Gastón Guruceaga"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "1"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "12"
                        },
                        "_text": "Uruguay"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "172",
                            "nombre": "Uruguay",
                            "paisId": "12",
                            "paisNombre": "Uruguay",
                            "paisSigla": "URU",
                            "tipo": "seleccion"
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "173482"
                    },
                    "nombre": {
                        "_text": "Federico Vicente"
                    },
                    "apellido": {
                        "_text": "Lanzillotta"
                    },
                    "nombreCorto": {
                        "_text": "Federico Lanzillotta"
                    },
                    "fechaNacimiento": {
                        "_text": "1992-12-01"
                    },
                    "edad": {
                        "_text": "27"
                    },
                    "peso": {
                        "_text": "80"
                    },
                    "altura": {
                        "_text": "185"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "28"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "1"
                        },
                        "_text": "Argentina"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                }
            ]
        }
    },
    {
        "equipo": {
            "_attributes": {
                "id": "154",
                "nombre": "Santiago Wanderers",
                "sigla": "WAN",
                "paisId": "6",
                "paisNombre": "Chile",
                "tipo": "club"
            },
            "jugadores": [
                {
                    "_attributes": {
                        "id": "164475"
                    },
                    "nombre": {
                        "_text": "Christian Andrés"
                    },
                    "apellido": {
                        "_text": "Fuentes López"
                    },
                    "nombreCorto": {
                        "_text": "Christian Fuentes"
                    },
                    "fechaNacimiento": {
                        "_text": "1999-07-07"
                    },
                    "edad": {
                        "_text": "20"
                    },
                    "peso": {
                        "_text": "69"
                    },
                    "altura": {
                        "_text": "188"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "30"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "246215"
                    },
                    "nombre": {
                        "_text": "Bayron"
                    },
                    "apellido": {
                        "_text": "Martínez"
                    },
                    "nombreCorto": {
                        "_text": "Bayron Martínez"
                    },
                    "fechaNacimiento": {
                        "_text": "2001-01-24"
                    },
                    "edad": {
                        "_text": "19"
                    },
                    "peso": {
                        "_text": "74"
                    },
                    "altura": {
                        "_text": "189"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "25"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "55109"
                    },
                    "nombre": {
                        "_text": "Mauricio Alejandro"
                    },
                    "apellido": {
                        "_text": "Viana Caamaño"
                    },
                    "fechaNacimiento": {
                        "_text": "1989-06-14"
                    },
                    "edad": {
                        "_text": "30"
                    },
                    "peso": {
                        "_text": "75"
                    },
                    "altura": {
                        "_text": "184"
                    },
                    "apodo": {
                        "_text": "Mauricio Viana"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "12"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                }
            ]
        }
    },
    {
        "equipo": {
            "_attributes": {
                "id": "120",
                "nombre": "U. Católica",
                "sigla": "UCA",
                "paisId": "6",
                "paisNombre": "Chile",
                "tipo": "club"
            },
            "jugadores": [
                {
                    "_attributes": {
                        "id": "88868"
                    },
                    "nombre": {
                        "_text": "Matías Ezequiel"
                    },
                    "apellido": {
                        "_text": "Dituro"
                    },
                    "nombreCorto": {
                        "_text": "Matías Dituro"
                    },
                    "fechaNacimiento": {
                        "_text": "1987-05-08"
                    },
                    "edad": {
                        "_text": "32"
                    },
                    "peso": {
                        "_text": "82"
                    },
                    "altura": {
                        "_text": "191"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "1"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "1"
                        },
                        "_text": "Argentina"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "170232"
                    },
                    "nombre": {
                        "_text": "Marcelo Ignacio"
                    },
                    "apellido": {
                        "_text": "Suárez Baez"
                    },
                    "nombreCorto": {
                        "_text": "Marcelo Suárez"
                    },
                    "fechaNacimiento": {
                        "_text": "2000-08-21"
                    },
                    "edad": {
                        "_text": "19"
                    },
                    "peso": {
                        "_text": "84"
                    },
                    "altura": {
                        "_text": "187"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "12"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "23581"
                    },
                    "nombre": {
                        "_text": "Cristopher Benjamin"
                    },
                    "apellido": {
                        "_text": "Toselli Rios"
                    },
                    "nombreCorto": {
                        "_text": "Cristopher Toselli"
                    },
                    "ladoHabil": {
                        "_text": "derecho"
                    },
                    "fechaNacimiento": {
                        "_text": "1988-06-16"
                    },
                    "edad": {
                        "_text": "31"
                    },
                    "peso": {
                        "_text": "75"
                    },
                    "altura": {
                        "_text": "186"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "17"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "159",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                }
            ]
        }
    },
    {
        "equipo": {
            "_attributes": {
                "id": "156",
                "nombre": "U. Concepción",
                "sigla": "UDC",
                "paisId": "6",
                "paisNombre": "Chile",
                "tipo": "club"
            },
            "jugadores": [
                {
                    "_attributes": {
                        "id": "17076"
                    },
                    "nombre": {
                        "_text": "Richard Andrés"
                    },
                    "apellido": {
                        "_text": "Leyton Abrigo"
                    },
                    "nombreCorto": {
                        "_text": "Richard Leyton"
                    },
                    "fechaNacimiento": {
                        "_text": "1987-01-25"
                    },
                    "edad": {
                        "_text": "33"
                    },
                    "peso": {
                        "_text": "85"
                    },
                    "altura": {
                        "_text": "187"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "1"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "19072"
                    },
                    "nombre": {
                        "_text": "Guillermo Martin"
                    },
                    "apellido": {
                        "_text": "Reyes Maneiro"
                    },
                    "nombreCorto": {
                        "_text": "Guillermo Reyes"
                    },
                    "fechaNacimiento": {
                        "_text": "1986-07-10"
                    },
                    "edad": {
                        "_text": "33"
                    },
                    "peso": {
                        "_text": "83"
                    },
                    "altura": {
                        "_text": "186"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "22"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "12"
                        },
                        "_text": "Uruguay"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "208638"
                    },
                    "nombre": {
                        "_text": "Diego Alejandro"
                    },
                    "apellido": {
                        "_text": "Stuardo Peña"
                    },
                    "nombreCorto": {
                        "_text": "Diego Stuardo"
                    },
                    "fechaNacimiento": {
                        "_text": "1999-06-17"
                    },
                    "edad": {
                        "_text": "20"
                    },
                    "peso": {
                        "_text": "70"
                    },
                    "altura": {
                        "_text": "179"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "12"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                }
            ]
        }
    },
    {
        "equipo": {
            "_attributes": {
                "id": "945",
                "nombre": "U. La Calera",
                "sigla": "ULC",
                "paisId": "6",
                "paisNombre": "Chile",
                "tipo": "club"
            },
            "jugadores": [
                {
                    "_attributes": {
                        "id": "115585"
                    },
                    "nombre": {
                        "_text": "Alexis"
                    },
                    "apellido": {
                        "_text": "Martín Arias"
                    },
                    "nombreCorto": {
                        "_text": "Alexis Martín Arias"
                    },
                    "fechaNacimiento": {
                        "_text": "1992-07-04"
                    },
                    "edad": {
                        "_text": "27"
                    },
                    "peso": {
                        "_text": "79"
                    },
                    "altura": {
                        "_text": "185"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "1"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "1"
                        },
                        "_text": "Argentina"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "99831"
                    },
                    "nombre": {
                        "_text": "Miguel Angel"
                    },
                    "apellido": {
                        "_text": "Vargas Mañan"
                    },
                    "nombreCorto": {
                        "_text": "Miguel Vargas"
                    },
                    "fechaNacimiento": {
                        "_text": "1996-06-15"
                    },
                    "edad": {
                        "_text": "23"
                    },
                    "peso": {
                        "_text": "79"
                    },
                    "altura": {
                        "_text": "183"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "12"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "159",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                }
            ]
        }
    },
    {
        "equipo": {
            "_attributes": {
                "id": "157",
                "nombre": "Unión Española",
                "sigla": "UES",
                "paisId": "6",
                "paisNombre": "Chile",
                "tipo": "club"
            },
            "jugadores": [
                {
                    "_attributes": {
                        "id": "220430"
                    },
                    "nombre": {
                        "_text": "Juan José"
                    },
                    "apellido": {
                        "_text": "Echave Turri"
                    },
                    "nombreCorto": {
                        "_text": "Juan José Echave"
                    },
                    "fechaNacimiento": {
                        "_text": "2001-01-24"
                    },
                    "edad": {
                        "_text": "19"
                    },
                    "peso": {
                        "_text": "68"
                    },
                    "altura": {
                        "_text": "180"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "12"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "",
                            "nombre": "",
                            "paisId": "",
                            "paisNombre": "",
                            "paisSigla": "",
                            "tipo": ""
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "24349"
                    },
                    "nombre": {
                        "_text": "Diego Ignacio"
                    },
                    "apellido": {
                        "_text": "Sánchez Carvajal"
                    },
                    "nombreCorto": {
                        "_text": "Diego Sánchez"
                    },
                    "fechaNacimiento": {
                        "_text": "1987-05-08"
                    },
                    "edad": {
                        "_text": "32"
                    },
                    "peso": {
                        "_text": "86"
                    },
                    "altura": {
                        "_text": "184"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "17"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "159",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "68274"
                    },
                    "nombre": {
                        "_text": "Álvaro Luis"
                    },
                    "apellido": {
                        "_text": "Salazar Bravo"
                    },
                    "nombreCorto": {
                        "_text": "Álvaro Salazar"
                    },
                    "fechaNacimiento": {
                        "_text": "1993-03-24"
                    },
                    "edad": {
                        "_text": "27"
                    },
                    "peso": {
                        "_text": "79"
                    },
                    "altura": {
                        "_text": "185"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "1"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "635",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                }
            ]
        }
    },
    {
        "equipo": {
            "_attributes": {
                "id": "76",
                "nombre": "Universidad de Chile",
                "sigla": "UCH",
                "paisId": "6",
                "paisNombre": "Chile",
                "tipo": "club"
            },
            "jugadores": [
                {
                    "_attributes": {
                        "id": "199565"
                    },
                    "nombre": {
                        "_text": "Cristóbal Alejandro"
                    },
                    "apellido": {
                        "_text": "Campos Véliz"
                    },
                    "nombreCorto": {
                        "_text": "Cristóbal Campos"
                    },
                    "fechaNacimiento": {
                        "_text": "1999-08-27"
                    },
                    "edad": {
                        "_text": "20"
                    },
                    "peso": {
                        "_text": "82"
                    },
                    "altura": {
                        "_text": "185"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "12"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "159",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "188624"
                    },
                    "nombre": {
                        "_text": "Fernando Carlos"
                    },
                    "apellido": {
                        "_text": "De Paul"
                    },
                    "nombreCorto": {
                        "_text": "Fernando De Paul"
                    },
                    "fechaNacimiento": {
                        "_text": "1991-04-25"
                    },
                    "edad": {
                        "_text": "28"
                    },
                    "peso": {
                        "_text": "84"
                    },
                    "altura": {
                        "_text": "183"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "1"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "1"
                        },
                        "_text": "Argentina"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "159",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "105805"
                    },
                    "nombre": {
                        "_text": "Nelson Francisco"
                    },
                    "apellido": {
                        "_text": "Espinoza Díaz"
                    },
                    "fechaNacimiento": {
                        "_text": "1995-09-22"
                    },
                    "edad": {
                        "_text": "24"
                    },
                    "peso": {
                        "_text": "84"
                    },
                    "altura": {
                        "_text": "190"
                    },
                    "apodo": {
                        "_text": "Nelson Espinoza"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "1"
                        },
                        "_text": "Arquero"
                    },
                    "camiseta": {
                        "_text": "29"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "6"
                        },
                        "_text": "Chile"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "635",
                            "nombre": "Chile",
                            "paisId": "6",
                            "paisNombre": "Chile",
                            "paisSigla": "CHI",
                            "tipo": "seleccion"
                        }
                    }
                }
            ]
        }
    }
]
  basicSetup()
  it('existing data', (done) => {
    request(app).get('/teams/players/1')
      .then((res)=>{
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.deep.equal(dataToMatch)
        done()
      })
      .catch((err) => done(err))
  }),
  it('empty array due to invalid position id', (done) => {
    request(app).get('/teams/players/24')
      .then((res)=>{
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.deep.equal([])
        done()
      })
      .catch((err) => done(err))
  })
})