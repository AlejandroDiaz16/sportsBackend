const   expect      = require('chai').expect,
        request     = require('supertest'),
        basicSetup  = require('../helper/basicSetup'),
        app         = require('../app'),
        Student     = require('../models/plantel')


describe('GET: /teams/144/players route to get all player in a team', () => {
  let dataToMatch = {
    "equipo": {
        "_attributes": {
            "id": "144",
            "nombre": "Cobresal",
            "sigla": "COB",
            "paisId": "6",
            "paisNombre": "Chile",
            "tipo": "club"
        },
        "jugadores": {
            "_attributes": {
                "cant": "33"
            },
            "jugador": [
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
                },
                {
                    "_attributes": {
                        "id": "202465"
                    },
                    "nombre": {
                        "_text": "Iván Alejandro"
                    },
                    "apellido": {
                        "_text": "Contreras Araya"
                    },
                    "fechaNacimiento": {
                        "_text": "2001-07-26"
                    },
                    "edad": {
                        "_text": "18"
                    },
                    "apodo": {
                        "_text": "Iván Contreras"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "2"
                        },
                        "_text": "Defensor"
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
                        "id": "16209"
                    },
                    "nombre": {
                        "_text": "Ariel Elpidio"
                    },
                    "apellido": {
                        "_text": "Coronel"
                    },
                    "nombreCorto": {
                        "_text": "Ariel Coronel"
                    },
                    "fechaNacimiento": {
                        "_text": "1987-07-17"
                    },
                    "edad": {
                        "_text": "32"
                    },
                    "peso": {
                        "_text": "73"
                    },
                    "altura": {
                        "_text": "182"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "2"
                        },
                        "_text": "Defensor"
                    },
                    "camiseta": {
                        "_text": "4"
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
                        "id": "214944"
                    },
                    "nombre": {
                        "_text": "Marcelo"
                    },
                    "apellido": {
                        "_text": "Filla"
                    },
                    "nombreCorto": {
                        "_text": "Marcelo Filla"
                    },
                    "fechaNacimiento": {
                        "_text": "1998-02-14"
                    },
                    "edad": {
                        "_text": "22"
                    },
                    "peso": {
                        "_text": "64"
                    },
                    "altura": {
                        "_text": "176"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "2"
                        },
                        "_text": "Defensor"
                    },
                    "camiseta": {
                        "_text": "2"
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
                        "id": "31058"
                    },
                    "nombre": {
                        "_text": "Rodolfo Antonio"
                    },
                    "apellido": {
                        "_text": "González Aránguiz"
                    },
                    "nombreCorto": {
                        "_text": "Rodolfo González"
                    },
                    "ladoHabil": {
                        "_text": "izquierdo"
                    },
                    "fechaNacimiento": {
                        "_text": "1989-02-28"
                    },
                    "edad": {
                        "_text": "31"
                    },
                    "peso": {
                        "_text": "70"
                    },
                    "altura": {
                        "_text": "183"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "2"
                        },
                        "_text": "Defensor"
                    },
                    "camiseta": {
                        "_text": "5"
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
                        "id": "79421"
                    },
                    "nombre": {
                        "_text": "Marcelo Pablo"
                    },
                    "apellido": {
                        "_text": "Jorquera Silva"
                    },
                    "ladoHabil": {
                        "_text": "izquierdo"
                    },
                    "fechaNacimiento": {
                        "_text": "1992-10-13"
                    },
                    "edad": {
                        "_text": "27"
                    },
                    "peso": {
                        "_text": "71"
                    },
                    "altura": {
                        "_text": "173"
                    },
                    "apodo": {
                        "_text": "Marcelo Jorquera"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "2"
                        },
                        "_text": "Defensor"
                    },
                    "camiseta": {
                        "_text": "7"
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
                        "id": "214886"
                    },
                    "nombre": {
                        "_text": "Cristhofer Ignacio"
                    },
                    "apellido": {
                        "_text": "Mesías Sepúlveda"
                    },
                    "nombreCorto": {
                        "_text": "Cristopher Mesías"
                    },
                    "fechaNacimiento": {
                        "_text": "1998-05-02"
                    },
                    "edad": {
                        "_text": "21"
                    },
                    "peso": {
                        "_text": "72"
                    },
                    "altura": {
                        "_text": "179"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "2"
                        },
                        "_text": "Defensor"
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
                        "id": "8285"
                    },
                    "nombre": {
                        "_text": "Mario Esteban"
                    },
                    "apellido": {
                        "_text": "Pardo Acuña"
                    },
                    "nombreCorto": {
                        "_text": "Mario Pardo"
                    },
                    "fechaNacimiento": {
                        "_text": "1988-05-13"
                    },
                    "edad": {
                        "_text": "31"
                    },
                    "peso": {
                        "_text": "74"
                    },
                    "altura": {
                        "_text": "182"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "2"
                        },
                        "_text": "Defensor"
                    },
                    "camiseta": {
                        "_text": "2"
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
                        "id": "51681"
                    },
                    "nombre": {
                        "_text": "Sebastián Ignacio"
                    },
                    "apellido": {
                        "_text": "Silva Pérez"
                    },
                    "nombreCorto": {
                        "_text": "Sebastián Silva"
                    },
                    "fechaNacimiento": {
                        "_text": "1991-07-16"
                    },
                    "edad": {
                        "_text": "28"
                    },
                    "peso": {
                        "_text": "76"
                    },
                    "altura": {
                        "_text": "179"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "2"
                        },
                        "_text": "Defensor"
                    },
                    "camiseta": {
                        "_text": "26"
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
                        "id": "246302"
                    },
                    "nombre": {
                        "_text": "Andy"
                    },
                    "apellido": {
                        "_text": "Aguilera"
                    },
                    "nombreCorto": {
                        "_text": "Andy Aguilera"
                    },
                    "fechaNacimiento": {
                        "_text": "2002-03-19"
                    },
                    "edad": {
                        "_text": "18"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "3"
                        },
                        "_text": "Volante"
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
                        "id": "214943"
                    },
                    "nombre": {
                        "_text": "Pablo Ignacio"
                    },
                    "apellido": {
                        "_text": "Cárdenas Baeza"
                    },
                    "fechaNacimiento": {
                        "_text": "2000-02-10"
                    },
                    "edad": {
                        "_text": "20"
                    },
                    "peso": {
                        "_text": "68"
                    },
                    "altura": {
                        "_text": "177"
                    },
                    "apodo": {
                        "_text": "Pablo Cárdenas"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "3"
                        },
                        "_text": "Volante"
                    },
                    "camiseta": {
                        "_text": "27"
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
                        "id": "59146"
                    },
                    "nombre": {
                        "_text": "Marcelo"
                    },
                    "apellido": {
                        "_text": "Cañete"
                    },
                    "fechaNacimiento": {
                        "_text": "1990-04-16"
                    },
                    "edad": {
                        "_text": "30"
                    },
                    "peso": {
                        "_text": "75"
                    },
                    "altura": {
                        "_text": "179"
                    },
                    "apodo": {
                        "_text": "Marcelo Cañete"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "3"
                        },
                        "_text": "Volante"
                    },
                    "camiseta": {
                        "_text": "19"
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
                        "id": "214945"
                    },
                    "nombre": {
                        "_text": "Diego Andrés"
                    },
                    "apellido": {
                        "_text": "Céspedes Maturana"
                    },
                    "fechaNacimiento": {
                        "_text": "1998-09-25"
                    },
                    "edad": {
                        "_text": "21"
                    },
                    "peso": {
                        "_text": "68"
                    },
                    "altura": {
                        "_text": "181"
                    },
                    "apodo": {
                        "_text": "Diego Céspedes"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "3"
                        },
                        "_text": "Volante"
                    },
                    "camiseta": {
                        "_text": "28"
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
                        "id": "45840"
                    },
                    "nombre": {
                        "_text": "Eduardo Ignacio"
                    },
                    "apellido": {
                        "_text": "Farías Díaz"
                    },
                    "nombreCorto": {
                        "_text": "Eduardo Farías"
                    },
                    "fechaNacimiento": {
                        "_text": "1988-01-01"
                    },
                    "edad": {
                        "_text": "32"
                    },
                    "peso": {
                        "_text": "75"
                    },
                    "altura": {
                        "_text": "181"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "3"
                        },
                        "_text": "Volante"
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
                        "id": "169517"
                    },
                    "nombre": {
                        "_text": "Juan Carlos"
                    },
                    "apellido": {
                        "_text": "Gaete Contreras"
                    },
                    "fechaNacimiento": {
                        "_text": "1996-05-21"
                    },
                    "edad": {
                        "_text": "23"
                    },
                    "peso": {
                        "_text": "66"
                    },
                    "altura": {
                        "_text": "174"
                    },
                    "apodo": {
                        "_text": "Juan Gaete"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "3"
                        },
                        "_text": "Volante"
                    },
                    "camiseta": {
                        "_text": "21"
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
                        "id": "83444"
                    },
                    "nombre": {
                        "_text": "Juan Rodrigo"
                    },
                    "apellido": {
                        "_text": "Gutiérrez Arenas"
                    },
                    "nombreCorto": {
                        "_text": "Juan Gutiérrez"
                    },
                    "fechaNacimiento": {
                        "_text": "1990-02-11"
                    },
                    "edad": {
                        "_text": "30"
                    },
                    "peso": {
                        "_text": "60"
                    },
                    "altura": {
                        "_text": "163"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "3"
                        },
                        "_text": "Volante"
                    },
                    "camiseta": {
                        "_text": "8"
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
                        "id": "215103"
                    },
                    "nombre": {
                        "_text": "Lucas Ignacio"
                    },
                    "apellido": {
                        "_text": "Portilla Portilla"
                    },
                    "nombreCorto": {
                        "_text": "Lucas Portilla"
                    },
                    "fechaNacimiento": {
                        "_text": "1999-11-10"
                    },
                    "edad": {
                        "_text": "20"
                    },
                    "peso": {
                        "_text": "70"
                    },
                    "altura": {
                        "_text": "164"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "3"
                        },
                        "_text": "Volante"
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
                        "id": "54745"
                    },
                    "nombre": {
                        "_text": "Franco Marcelo"
                    },
                    "apellido": {
                        "_text": "Ragusa Nappe"
                    },
                    "nombreCorto": {
                        "_text": "Franco Ragusa"
                    },
                    "fechaNacimiento": {
                        "_text": "1993-07-27"
                    },
                    "edad": {
                        "_text": "26"
                    },
                    "peso": {
                        "_text": "77"
                    },
                    "altura": {
                        "_text": "179"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "3"
                        },
                        "_text": "Volante"
                    },
                    "camiseta": {
                        "_text": "19"
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
                        "id": "101318"
                    },
                    "nombre": {
                        "_text": "John Antonio"
                    },
                    "apellido": {
                        "_text": "Santander Plaza"
                    },
                    "nombreCorto": {
                        "_text": "John Santander"
                    },
                    "fechaNacimiento": {
                        "_text": "1994-05-15"
                    },
                    "edad": {
                        "_text": "25"
                    },
                    "peso": {
                        "_text": "65"
                    },
                    "altura": {
                        "_text": "168"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "3"
                        },
                        "_text": "Volante"
                    },
                    "camiseta": {
                        "_text": "15"
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
                        "id": "225527"
                    },
                    "nombre": {
                        "_text": "Luis Ingancio"
                    },
                    "apellido": {
                        "_text": "Vergara Loyola"
                    },
                    "nombreCorto": {
                        "_text": "Luis Vergara"
                    },
                    "fechaNacimiento": {
                        "_text": "2000-01-29"
                    },
                    "edad": {
                        "_text": "20"
                    },
                    "peso": {
                        "_text": "66"
                    },
                    "altura": {
                        "_text": "177"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "3"
                        },
                        "_text": "Volante"
                    },
                    "camiseta": {
                        "_text": "31"
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
                        "id": "68830"
                    },
                    "nombre": {
                        "_text": "Sebastián Edgardo"
                    },
                    "apellido": {
                        "_text": "Céspedes Reyes"
                    },
                    "nombreCorto": {
                        "_text": "Sebastián Céspedes"
                    },
                    "fechaNacimiento": {
                        "_text": "1992-04-18"
                    },
                    "edad": {
                        "_text": "28"
                    },
                    "peso": {
                        "_text": "58"
                    },
                    "altura": {
                        "_text": "175"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "4"
                        },
                        "_text": "Delantero"
                    },
                    "camiseta": {
                        "_text": "23"
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
                        "id": "19083"
                    },
                    "nombre": {
                        "_text": "Rodolfo Vicente"
                    },
                    "apellido": {
                        "_text": "Gamarra Varela"
                    },
                    "nombreCorto": {
                        "_text": "Rodolfo Gamarra"
                    },
                    "fechaNacimiento": {
                        "_text": "1988-12-10"
                    },
                    "edad": {
                        "_text": "31"
                    },
                    "peso": {
                        "_text": "66"
                    },
                    "altura": {
                        "_text": "166"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "4"
                        },
                        "_text": "Delantero"
                    },
                    "camiseta": {
                        "_text": "6"
                    },
                    "pais": {
                        "_attributes": {
                            "paisId": "10"
                        },
                        "_text": "Paraguay"
                    },
                    "clubActual": {
                        "_attributes": {
                            "id": "170",
                            "nombre": "Paraguay",
                            "paisId": "10",
                            "paisNombre": "Paraguay",
                            "paisSigla": "PAR",
                            "tipo": "seleccion"
                        }
                    }
                },
                {
                    "_attributes": {
                        "id": "47481"
                    },
                    "nombre": {
                        "_text": "Lino Waldemar"
                    },
                    "apellido": {
                        "_text": "Maldonado Gárnica"
                    },
                    "nombreCorto": {
                        "_text": "Lino Maldonado"
                    },
                    "fechaNacimiento": {
                        "_text": "1989-02-08"
                    },
                    "edad": {
                        "_text": "31"
                    },
                    "peso": {
                        "_text": "72"
                    },
                    "altura": {
                        "_text": "175"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "4"
                        },
                        "_text": "Delantero"
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
                        "id": "173640"
                    },
                    "nombre": {
                        "_text": "Alan Guillermo"
                    },
                    "apellido": {
                        "_text": "Murialdo"
                    },
                    "nombreCorto": {
                        "_text": "Alan Murialdo"
                    },
                    "fechaNacimiento": {
                        "_text": "1992-09-24"
                    },
                    "edad": {
                        "_text": "27"
                    },
                    "peso": {
                        "_text": "94"
                    },
                    "altura": {
                        "_text": "194"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "4"
                        },
                        "_text": "Delantero"
                    },
                    "camiseta": {
                        "_text": "9"
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
                        "id": "62919"
                    },
                    "nombre": {
                        "_text": "Leonardo Andrés"
                    },
                    "apellido": {
                        "_text": "Olivera Troncoso"
                    },
                    "nombreCorto": {
                        "_text": "Leonardo Olivera"
                    },
                    "fechaNacimiento": {
                        "_text": "1987-06-08"
                    },
                    "edad": {
                        "_text": "32"
                    },
                    "peso": {
                        "_text": "77"
                    },
                    "altura": {
                        "_text": "179"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "4"
                        },
                        "_text": "Delantero"
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
                        "id": "225629"
                    },
                    "nombre": {
                        "_text": "Benjamin Rodrigo"
                    },
                    "apellido": {
                        "_text": "Osses Miranda"
                    },
                    "nombreCorto": {
                        "_text": "Benjamin Osses"
                    },
                    "fechaNacimiento": {
                        "_text": "2002-06-24"
                    },
                    "edad": {
                        "_text": "17"
                    },
                    "peso": {
                        "_text": "71"
                    },
                    "altura": {
                        "_text": "172"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "4"
                        },
                        "_text": "Delantero"
                    },
                    "camiseta": {
                        "_text": "21"
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
                        "id": "69577"
                    },
                    "nombre": {
                        "_text": "Felipe Andrés"
                    },
                    "apellido": {
                        "_text": "Reynero Galarce"
                    },
                    "nombreCorto": {
                        "_text": "Felipe Reynero"
                    },
                    "fechaNacimiento": {
                        "_text": "1989-03-14"
                    },
                    "edad": {
                        "_text": "31"
                    },
                    "peso": {
                        "_text": "75"
                    },
                    "altura": {
                        "_text": "178"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "4"
                        },
                        "_text": "Delantero"
                    },
                    "camiseta": {
                        "_text": "11"
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
                        "id": "54699"
                    },
                    "nombre": {
                        "_text": "Fabián Andrés"
                    },
                    "apellido": {
                        "_text": "Saavedra Muñoz"
                    },
                    "nombreCorto": {
                        "_text": "Fabián Saavedra"
                    },
                    "fechaNacimiento": {
                        "_text": "1992-01-27"
                    },
                    "edad": {
                        "_text": "28"
                    },
                    "peso": {
                        "_text": "67"
                    },
                    "altura": {
                        "_text": "168"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "4"
                        },
                        "_text": "Delantero"
                    },
                    "camiseta": {
                        "_text": "18"
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
                        "id": "4470"
                    },
                    "nombre": {
                        "_text": "Sebastián Esteban"
                    },
                    "apellido": {
                        "_text": "Varas Moreno"
                    },
                    "nombreCorto": {
                        "_text": "Sebastián Varas"
                    },
                    "fechaNacimiento": {
                        "_text": "1988-08-01"
                    },
                    "edad": {
                        "_text": "31"
                    },
                    "peso": {
                        "_text": "82"
                    },
                    "altura": {
                        "_text": "184"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "4"
                        },
                        "_text": "Delantero"
                    },
                    "camiseta": {
                        "_text": "23"
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
                        "id": "14917"
                    },
                    "nombre": {
                        "_text": "Gustavo"
                    },
                    "apellido": {
                        "_text": "Huerta Araya"
                    },
                    "nombreCorto": {
                        "_text": "Gustavo Huerta"
                    },
                    "fechaNacimiento": {
                        "_text": "1957-10-15"
                    },
                    "edad": {
                        "_text": "62"
                    },
                    "rol": {
                        "_attributes": {
                            "idRol": "5"
                        },
                        "_text": "DT"
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
    }
}
  basicSetup()
  it('existing data', (done) => {
    request(app).get('/teams/144/players')
      .then((res)=>{
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.deep.equal(dataToMatch)
        done()
      })
      .catch((err) => done(err))
  }),
  it('empty array due to invalid team id', (done) => {
    request(app).get('/teams/1/players')
      .then((res)=>{
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.deep.equal([])
        done()
      })
      .catch((err) => done(err))
  })
})