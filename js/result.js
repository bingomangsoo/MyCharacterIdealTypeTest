let imgURl;
        let charName;

        $(document).ready(function () {
            let index = location.href.substr(
                location.href.lastIndexOf('=') + 1
            );

            if (index == 0) {
                $(".contain h2").after('<h3 class="result">< 란 나기사 ></h3>');
                $(".contain h3").after('<img src="img/란나기사.png"><br>');
                imgURl = "https://ifh.cc/g/fY8W1Z.jpg"
                charName = "란 나기사";
            } else if (index == 1) {
                $(".contain h2").after('<h3 class="result">< 철수 ></h3>');
                $(".contain h3").after('<img src="img/철수.jpg" width="100%"><br>');
                imgURl = "https://ifh.cc/g/xyRl7o.jpg"
                charName = "철수";
            } else if (index == 2) {
                $(".contain h2").after('<h3 class="result">< 기로로 ></h3>');
                $(".contain h3").after('<img src="img/기로로.png"><br>');
                imgURl = "https://ifh.cc/g/QJlr3z.jpg"
                charName = "기로로";
            } else if (index == 3) {
                $(".contain h2").after('<h3 class="result">< 케로로 ></h3>');
                $(".contain h3").after('<img src="img/케로로.jpg"><br>');
                imgURl = "https://ifh.cc/g/sfM40x.jpg"
                charName = "케로로";
            } else if (index == 4) {
                $(".contain h2").after('<h3 class="result">< 이누야샤 ></h3>');
                $(".contain h3").after('<img src="img/이누야샤.jpg"><br>');
                imgURl = "https://ifh.cc/g/8rZJ5L.jpg"
                charName = "이누야샤";
            } else if (index == 5) {
                $(".contain h2").after('<h3 class="result">< 셋쇼마루 ></h3>');
                $(".contain h3").after('<img src="img/셋쇼마루.jpeg"><br>');
                imgURl = "https://ifh.cc/g/64lJo3.jpg"
                charName = "셋쇼마루";
            } else if (index == 6) {
                $(".contain h2").after('<h3 class="result">< 고길동 ></h3>');
                $(".contain h3").after('<img src="img/고길동.jpg"><br>');
                imgURl = "https://ifh.cc/g/vPyOGL.jpg"
                charName = "고길동";
            } else if (index == 7) {
                $(".contain h2").after('<h3 class="result">< 카제하야 ></h3>');
                $(".contain h3").after('<img src="img/카제하야.png"><br>');
                imgURl = "https://ifh.cc/g/4ZQ4Os.jpg"
                charName = "카제하야";
            } else if (index == 8) {
                $(".contain h2").after('<h3 class="result">< 리바이 ></h3>');
                $(".contain h3").after('<img src="img/리바이.png"><br>');
                imgURl = "https://ifh.cc/g/bJVw0A.jpg"
                charName = "리바이";
            } else if (index == 9) {
                $(".contain h2").after('<h3 class="result">< 노진구 ></h3>');
                $(".contain h3").after('<img src="img/노진구.jpg"><br>');
                imgURl = "https://ifh.cc/g/A1fSdJ.jpg"
                charName = "노진구";
            } else if (index == 10) {
                $(".contain h2").after('<h3 class="result">< 비실이 ></h3>');
                $(".contain h3").after('<img src="img/비실이.png"><br>');
                imgURl = "https://ifh.cc/g/qhsJJD.jpg"
                charName = "비실이";
            } else if (index == 11) {
                $(".contain h2").after('<h3 class="result">< 원가온 ></h3>');
                $(".contain h3").after('<img src="img/원가온.png"><br>');
                imgURl = "https://ifh.cc/g/nwQAMA.jpg"
                charName = "원가온";
            } else if (index == 12) {
                $(".contain h2").after('<h3 class="result">< 피에르 ></h3>');
                $(".contain h3").after('<img src="img/피에르.jpg"><br>');
                imgURl = "https://ifh.cc/g/gKBGsF.jpg"
                charName = "피에르";
            } else if (index == 13) {
                $(".contain h2").after('<h3 class="result">< 웅이 ></h3>');
                $(".contain h3").after('<img src="img/웅이.jpg"><br>');
                imgURl = "https://ifh.cc/g/Lj8qos.jpg"
                charName = "웅이";
            } else if (index == 14) {
                $(".contain h2").after('<h3 class="result">< 철이 ></h3>');
                $(".contain h3").after('<img src="img/철이.jpg"><br>');
                imgURl = "https://ifh.cc/g/DsT1N5.jpg"
                charName = "철이";
            } else if (index == 15) {
                $(".contain h2").after('<h3 class="result">< 샤오랑 ></h3>');
                $(".contain h3").after('<img src="img/샤오랑.png"><br>');
                imgURl = "https://ifh.cc/g/fbXcZq.jpg"
                charName = "샤오랑";
            } else if (index == 16) {
                $(".contain h2").after('<h3 class="result">< 훈이 ></h3>');
                $(".contain h3").after('<img src="img/훈이.png"><br>');
                imgURl = "https://ifh.cc/g/ldoRyz.jpg"
                charName = "훈이";
            } else if (index == 17) {
                $(".contain h2").after('<h3 class="result">< 루피 ></h3>');
                $(".contain h3").after('<img src="img/루피.png"><br>');
                imgURl = "https://ifh.cc/g/S0npQG.jpg"
                charName = "루피";
            }
            
        });

        let thisUrl = document.URL;

        function shareTwitter() {

            var url = "http://twitter.com/share?url=" + encodeURIComponent(thisUrl) + "&text=" + encodeURIComponent("나의 캐릭터 이상형 테스트 결과는 " + charName);
            window.open(url);
        }

        function toast() {
            let textarea = document.createElement("textarea");
            document.body.appendChild(textarea)
            textarea.value = thisUrl;
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);

            let removeToast;
            const toast = document.getElementById("toast");
            toast.classList.contains("reveal") ?
                (clearTimeout(removeToast), removeToast = setTimeout(function () {
                    document.getElementById("toast").classList.remove("reveal")
                }, 1000)) :
                removeToast = setTimeout(function () {
                    document.getElementById("toast").classList.remove("reveal")
                }, 1000)
            toast.classList.add("reveal"),
                toast.innerText = "copy success"
        }

        