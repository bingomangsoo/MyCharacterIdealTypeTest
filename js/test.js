
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    let 란나기사 = 0, 철수 = 0, 기로로 = 0, 케로로 = 0, 이누야사 = 0, 셋쇼마루 = 0, 고길동 = 0, 카제하야 = 0, 리바이 = 0, 노진구 = 0,
        비실이 = 0, 원가온 = 0, 피에르 = 0, 웅이 = 0, 철이 = 0, 샤오랑 = 0, 루피 = 0, 훈이 = 0;



    $(document).ready(function () {

        $(".contain").append('<h3>좋아하는 성격은?</h3>')

        const array = ['<input type="button" id="ans1" name="dog" value="해피해피한 강아지같은 성격" class="const1" onclick="react2(this)">',
            '<input type="button" name="baby" id="ans1" value="차갑고 완벽해 보여도 속은 말랑 아기" class="const1" onclick="react2(this)">',
            '<input type="button" name="cheun" id="ans1" value="무뚝뚝하지만 정 많은 츤데레" class="const1" onclick="react2(this)">',
            '<input type="button" id="ans1" name="quiet" value="조용하고 소심하지만 수줍은" class="const1" onclick="react2(this)">']

        shuffle(array);
        $(".contain").append(array)

    })

    function react2(a) {
        if ($(a).attr("name") == "dog") {
            케로로 += 15;
            카제하야 += 15;
            루피 += 10;
            노진구+=10;
            웅이+=10;
        } else if ($(a).attr("name") == "baby") {
            란나기사 += 15;
            철수 += 15;
            고길동 += 15;
            비실이 += 15;
            피에르+=15;
            철이+=10;
            피에르+=10;

            노진구-=10;
            훈이-=10;
            철이-=10;
            웅이-=10;
            케로로-=10;
            카제하야-=10;
            루피-=10;

        } else if ($(a).attr("name") == "cheun") {
            기로로 += 15;
            이누야사 += 15;
            리바이 += 15;
            피에르 += 15;
            철이 += 15;
            샤오랑 += 15;
            원가온+=15;

            노진구-=10;
            훈이-=10;
            철이-=10;
            웅이-=10;
            케로로-=10;
            카제하야-=10;
            루피-=10;
            

        } else if ($(a).attr("name") == "quiet"){
            노진구+=15;
            훈이+=15;
            기로로+=10;
            철이+=15;
            웅이+=15;

            피에르 -= 10;
            샤오랑 -= 10;
            이누야사-=10;
            비실이-=10;
            철수-=10;
            란나기사-=10;
            루피-=10;
            케로로-=10;
            카제하야-=10;
            고길동-=10;
            원가온-=10;
            리바이-=20;
        }

        $(".contain").empty();
        $(".contain").append('<h3>좋아하는 얼굴상은?</h3>')


        const array = ['<input type="button" id="ans2" name="dog" value="강아지상" class="const1" onclick="react3(this)">',
            '<input type="button" name="cat" id="ans2" value="고양이상" class="const1" onclick="react3(this)">',
            '<input type="button" name="hamster" id="ans2" value="햄스터상" class="const1" onclick="react3(this)">',
            '<input type="button" name="frog" id="ans2" value="개구리상" class="const1" onclick="react3(this)">',
            '<input type="button" name="fox" id="ans2" value="여우상" class="const1" onclick="react3(this)">'
        ]
        shuffle(array);

        $(".contain").append(array)

    }


    function react3(a) {
        if ($(a).attr("name") == "dog") {
            이누야사 += 15;
            카제하야 += 15;
            철이 += 15;
            루피 += 15;
            웅이 += 15;
        } else if ($(a).attr("name") == "cat") {
            샤오랑 += 15;
            란나기사 += 15;
            철수 += 15;
            리바이 += 15;
            원가온+=15;
        } else if ($(a).attr("name") == "frog") {
            기로로 += 20;
            케로로 += 20;
            고길동 += 15;
            루피 += 15;
        } else if ($(a).attr("name") == "fox") {
            셋쇼마루 += 15;
            비실이 += 15;
            피에르 += 15;
        } else if ($(a).attr("name") == "hamster") {
            노진구 += 15;
            훈이 += 15;
        }

        $(".contain").empty();

        $(".contain").append('<h3>어떤 연애 스타일이 좋은가?</h3>')

        const array = ['<input type="button" name="friend" id="ans3-1" value="친구같이 재밌고 편안한 연애" class="const1" onclick="react4(this)">',
            '<input type="button" name="romantic" id="ans3-2" value="설레고 로맨틱한 연애" class="const1" onclick="react4(this)">'
        ]
        shuffle(array);

        $(".contain").append(array)
    }

    function react4(a) {

        if ($(a).attr("name") == "friend") {
            케로로 += 10;
            이누야사 += 10;
            노진구 += 10;
            철이 += 10;
            샤오랑 += 10;
            루피 += 10;
            훈이 += 10;
        } else if ($(a).attr("name") == "romantic") {
            란나기사 += 10;
            철수 += 10;
            기로로 += 10;
            셋쇼마루 += 10;
            고길동 += 10;
            카제하야 += 10;
            리바이 += 10;
            비실이 += 10;
            원가온 += 10;
            피에르 += 10;
            웅이 += 10;
        }

        $(".contain").empty();
        $(".contain").append('<h3>연상 vs 동갑 vs 연하</h3>')
        const array = ['<input type="button" name="up" id="ans3-1" value="연상" class="const1" onclick="react5(this)">',
            '<input type="button" name="equal" id="ans3-2" value="동갑" class="const1" onclick="react5(this)">',
            '<input type="button" name="down" id="ans3-2" value="연하" class="const1" onclick="react5(this)">'
        ]
        shuffle(array);

        $(".contain").append(array)

    }

    function react5(a) {
        if ($(a).attr("name") == "up") {
            란나기사 += 10;
            철수 += 10;
            기로로 += 10;
            셋쇼마루 += 10;
            고길동 += 10;
            리바이 += 10;
            웅이 += 10;
            피에르+=10;
        } else if ($(a).attr("name") == "equal") {
            케로로 += 10;
            이누야사 += 10;
            카제하야 += 10;
            노진구 += 10;
            철이 += 10;
            샤오랑 += 10;
            루피 += 10;
            원가온+=10;

        } else if ($(a).attr("name") == "down") {
            노진구 += 10;
            비실이 += 10;
            훈이 += 10;
            루피+=10;

            셋쇼마루-=10;
            리바이-=10;
        }

        $(".contain").empty();
        $(".contain").append('<h3>뭐가 더 꼴리는가?</h3>')
        const array = ['<input type="button" name="cold" id="ans3-1" value="차가운 범생이" class="const1" onclick="react6(this)">',
            '<input type="button" name="warm" id="ans3-2" value="따뜻한 양아치" class="const1" onclick="react6(this)">']
        shuffle(array);
        $(".contain").append(array)
    }

    function react6(a) {
        if ($(a).attr("name") == "cold") {
            란나기사 += 10;
            철수 += 10;
            셋쇼마루 += 10;
            고길동 += 10;
            카제하야 += 10;
            노진구 += 10;
            원가온 += 10;
            철이 += 10;
            리바이 += 10;
            피에르 += 10;
            웅이 += 10;
        } else if ($(a).attr("name") == "warm") {
            기로로 += 10;
            케로로 += 10;
            이누야사 += 10;
            셋쇼마루 += 10;
            비실이 += 10;
            샤오랑 += 10;
            루피 += 10;
            훈이 += 10;
        }

        $(".contain").empty();
        $(".contain").append('<h3>뭐가 더 꼴리는가?</h3>')
        const array = ['<input type="button" name="cry" id="ans3-1" value="울리고 싶은 사람" class="const1" onclick="react7(this)">',
            '<input type="button" name="smile" id="ans3-2" value="웃게 만들고 싶은 사람" class="const1" onclick="react7(this)">']
        shuffle(array);
        $(".contain").append(array)
    }

    function react7(a) {
        if ($(a).attr("name") == "smile") {
            란나기사 += 10;
            이누야사 + 10;
            셋쇼마루 += 10;
            카제하야 += 10;
            리바이 += 10;
            웅이 += 10;
        } else if ($(a).attr("name") == "cry") {
            루피 += 10;
            철수 += 10;
            기로로 += 10;
            케로로 += 10;
            고길동 += 10;
            노진구 += 10;
            비실이 += 10;
            원가온+=10;
            피에르 += 10;
            철이 += 10;
            샤오랑 += 10;
            훈이 += 10;
        }

        $(".contain").empty();
        $(".contain").append('<h3>??? : </h3>')
        const array = ['<input type="button" name="die" id="ans3-1" value="널 위해서라면 죽을 수 있어" class="const1" onclick="react8(this)">',
            '<input type="button" name="kill" id="ans3-2" value="널 위해서라면 죽일 수 있어" class="const1" onclick="react8(this)">']
        shuffle(array);
        $(".contain").append(array)


    }
    function react8(a) {
        if ($(a).attr("name") == "die") {
            란나기사 += 10;
            철수 += 10;
            케로로 += 10;
            고길동 += 10;
            카제하야 += 10;
            노진구 += 10;
            피에르 += 10;
            철이 += 10;
            루피 += 10;
            훈이 += 10;
        } else if ($(a).attr("name") == "kill") {
            기로로 += 10;
            이누야사 += 10;
            셋쇼마루 += 10;
            리바이 += 10;
            비실이 += 10;
            샤오랑 += 10;
            웅이 += 10;
            원가온+=10;
        }

        $(".contain").empty();
        $(".contain").append('<h3>낮과 밤</h3>')
        const array = ['<input type="button" name="1" id="ans3-1" value="낮져밤져" class="const1" onclick="react9(this)">',
            '<input type="button" name="2" id="ans3-2" value="낮져밤이" class="const1" onclick="react9(this)">',
            '<input type="button" name="3" id="ans3-2" value="낮이밤져" class="const1" onclick="react9(this)">',
            '<input type="button" name="4" id="ans3-2" value="낮이밤이" class="const1" onclick="react9(this)">']
        shuffle(array);
        $(".contain").append(array)


    }

    function react9(a) {
        if ($(a).attr("name") == "1") {
            노진구 += 10;
            이누야사 += 10;
            고길동 += 10;
            루피 += 10;
            훈이 += 10;
            리바이 -= 20;
        } else if ($(a).attr("name") == "2") {
            카제하야 += 10;
            이누야사 += 10;
            루피 += 10;
            리바이 -= 20;
            웅이 += 10;
        } else if ($(a).attr("name") == "3") {
            란나기사 += 10;
            철수 += 10;
            기로로 += 10;
            비실이 += 10;
            철이 += 10;
            샤오랑 += 10;
        } else if ($(a).attr("name") == "4") {
            케로로 += 10;
            셋쇼마루 += 10;
            리바이 += 10;
            피에르 += 10;
            고길동 += 10;
            원가온+=10;
        }




        $(".contain").empty();

        $(".contain").append('<h3>큐트냐 섹시냐</h3>')

        const array = ['<input type="button" id="ans1" name="cute" value="큐티" class="const1" onclick="react10(this)">',
            '<input type="button" name="sexy" id="ans1" value="섹시" class="const1" onclick="react10(this)">']

        shuffle(array);
        $(".contain").append(array)
    }
    function react10(a) {

        if ($(a).attr("name") == "cute") {
            철수 += 10;
            케로로 += 10;
            노진구 += 10;
            훈이 += 10;
            샤오랑 += 10;
            루피+=10;

        } else if ($(a).attr("name") == "sexy") {
            란나기사 += 10;
            기로로 += 10;
            이누야사 += 10;
            셋쇼마루 += 10;
            고길동 += 10;
            카제하야 += 10;
            리바이 += 10;
            비실이 += 10;
            원가온 += 10;
            피에르 += 10;
            철이 += 10;
            웅이 += 10;
        }
        $(".contain").empty();

        $(".contain").append('<h3>내가</h3>')

        const array = ['<input type="button" id="ans1" name="1" value="챙겨 주고싶은" class="const1" onclick="react11(this)">',
            '<input type="button" name="2" id="ans1" value="챙김 당하고 싶은" class="const1" onclick="react11(this)">']

        shuffle(array);
        $(".contain").append(array)
    }

    function react11(a) {

        if ($(a).attr("name") == "1") {
            케로로 += 10;
            고길동 += 10;
            노진구 += 10;
            비실이 += 10;
            피에르 += 10;
            샤오랑 += 10;
            훈이 += 10;
            루피+=10;
        } else if ($(a).attr("name") == "2") {
            란나기사 += 10;
            철수 += 10;
            기로로 += 10;
            이누야사 += 10;
            셋쇼마루 += 10;
            카제하야 += 10;
            리바이 += 10;
            철이 += 10;
            웅이 += 10;
            원가온+=10;
        }

        $(".contain").empty();

        $(".contain").append('<h3>덮머? 깐머?</h3>')

        const array = ['<input type="button" id="ans1" name="1" value="깐머리" class="const1" onclick="react12(this)">',
            '<input type="button" name="2" id="ans1" value="덮은머리" class="const1" onclick="react12(this)">']

        shuffle(array);
        $(".contain").append(array)
    }

    function react12(a) {
        if ($(a).attr("name") == "1") {
            란나기사 += 10;
            철수 += 10;
            고길동 += 10;
            리바이 += 10;
            비실이 += 10;
            훈이 += 10;

            기로로 -= 10;
            케로로-=10;
            이누야사 -= 10;
            셋쇼마루 -= 10;
            고길동 -= 10;
            카제하야 -= 10;
            노진구 -= 10;
            피에르 -= 10;
            샤오랑 -= 10;
            웅이 -= 10;
            원가온-=10;

        } else if ($(a).attr("name") == "2") {
            기로로 += 10;
            이누야사 += 10;
            셋쇼마루 += 10;
            고길동 += 10;
            카제하야 += 10;
            노진구 += 10;
            피에르 += 10;
            샤오랑 += 10;
            웅이 += 10;
            원가온+=10;

            란나기사 -= 10;
            철수 -= 10;
            고길동 -= 10;
            리바이 -= 10;
            비실이 -= 10;
            훈이 -= 10;
        }

        charList = [란나기사, 철수, 기로로, 케로로, 이누야사, 셋쇼마루, 고길동, 카제하야, 리바이, 노진구,
            비실이, 원가온, 피에르, 웅이, 철이, 샤오랑, 훈이,루피]

        let max = 0;
        let index = 0;
        for (let i = 0; i < charList.length; i++) {
            if (charList[i] > max) {
                max = charList[i]
                index = i;
            }
        }

        window.location.href = "result.html?index="+index;


    }