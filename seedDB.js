const   mongoose = require('mongoose'),
        Session = require('./app/models/Session');

const   sessionSeedData = [
    {
        "sessionId": "AB0082018-12-19_14:49:50",
        "username": "ABDUL",
        "date": "2018-12-19_14:49:50",
        "totalScore": 3.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 4.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "BA0082018-12-19_15:03:50",
        "username": "BAMBANG",
        "date": "2018-12-19_15:03:50",
        "totalScore": 12.0,
        "totalTime": 13.1234779163360596,
        "scene1Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 6.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 1.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "DI0082018-12-19_15:01:50",
        "username": "DINDIN",
        "date": "2018-12-19_15:01:50",
        "totalScore": 9.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 8.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 5.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 4.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "ER0082018-12-19_15:01:50",
        "username": "ERWIN",
        "date": "2018-12-19_15:01:50",
        "totalScore": 9.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 8.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 5.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 4.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "FI0082018-12-19_15:01:50",
        "username": "FIRMAN",
        "date": "2018-12-19_15:01:50",
        "totalScore": 9.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 8.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 5.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 4.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "GN0082018-12-19_15:01:50",
        "username": "GANDA",
        "date": "2018-12-19_15:01:50",
        "totalScore": 9.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 8.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 5.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 4.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "HI0082018-12-19_15:01:50",
        "username": "HILMAN",
        "date": "2018-12-19_15:01:50",
        "totalScore": 9.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 8.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 5.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 4.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "IM0082018-12-19_15:01:50",
        "username": "IMAN",
        "date": "2018-12-19_15:01:50",
        "totalScore": 9.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 8.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 5.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 4.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "JA0082018-12-19_15:01:50",
        "username": "JAKA",
        "date": "2018-12-19_15:01:50",
        "totalScore": 9.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 8.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 5.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 4.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "KA0082018-12-19_15:01:50",
        "username": "KARINA",
        "date": "2018-12-19_15:01:50",
        "totalScore": 9.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 8.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 5.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 4.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "CA0082018-12-19_15:01:50",
        "username": "CANDRA",
        "date": "2018-12-19_15:01:50",
        "totalScore": 9.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 8.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 5.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 4.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "LU0082018-12-19_15:01:50",
        "username": "LULU",
        "date": "2018-12-19_15:01:50",
        "totalScore": 9.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 8.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 5.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 4.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "MA0082018-12-19_15:01:50",
        "username": "MARSHA",
        "date": "2018-12-19_15:01:50",
        "totalScore": 9.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 8.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 5.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 4.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "NE0082018-12-19_15:01:50",
        "username": "NENO",
        "date": "2018-12-19_15:01:50",
        "totalScore": 9.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 8.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 5.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 4.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "OP0082018-12-19_15:01:50",
        "username": "OPIK",
        "date": "2018-12-19_15:01:50",
        "totalScore": 9.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 8.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 5.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 4.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "PI0082018-12-19_15:01:50",
        "username": "PINKAN",
        "date": "2018-12-19_15:01:50",
        "totalScore": 9.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 8.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 5.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 4.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "QO0082018-12-19_15:01:50",
        "username": "QORRY",
        "date": "2018-12-19_15:01:50",
        "totalScore": 9.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 8.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 5.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 4.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "RE0082018-12-19_15:01:50",
        "username": "RESTU",
        "date": "2018-12-19_15:01:50",
        "totalScore": 9.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 8.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 5.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 4.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "SA0082018-12-19_15:01:50",
        "username": "SABRINA",
        "date": "2018-12-19_15:01:50",
        "totalScore": 9.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 8.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 5.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 4.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "TE0082018-12-19_15:01:50",
        "username": "TEGUH",
        "date": "2018-12-19_15:01:50",
        "totalScore": 9.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 8.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 5.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 4.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    },
    {
        "sessionId": "UD0082018-12-19_15:01:50",
        "username": "UDIN",
        "date": "2018-12-19_15:01:50",
        "totalScore": 9.0,
        "totalTime": 9.1234779163360596,
        "scene1Score":
            {
                "time": 8.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene2Score":
            {
                "time": 4.138779163360596,
                "score": 5.0,
                "maxScore": 6.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene3Score":
            {
                "time": 9.138779163360596,
                "score": 3.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene4Score":
            {
                "time": 4.138779163360596,
                "score": 4.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            },
        "scene5Score":
            {
                "time": 4.138779163360596,
                "score": 2.0,
                "maxScore": 4.0,
                "userAnswers": [
                    2	
                ],
                "userDecisions": [
                    1,
                    0,
                    0
                ]
            }
    }

]

function seedDB() {
    // Empty the session data
    Session.remove({})
    .then((data) => {
        console.log("Success resetting data");
        // Seed with fresh session data
        sessionSeedData.forEach(function(seed) {
            Session.create(seed, function(err, createdData) {
                if (err) {
                    console.log(err);
                } else {
                }
            });
        });
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = seedDB;