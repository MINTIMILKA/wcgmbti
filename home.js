//텍스트 문자열
var test_question_text = new Array(12);
var test_select_text_1 = new Array(12);
var test_select_text_2 = new Array(12);

//결과 문자열 
var result_type_text = new Array(16);
var result_name_text = new Array(16);
var reuslt_info_text = new Array(16);

//

//테스트 시작 함수
function test_start()
{
    //배경 바꾸기
    document.querySelector("html").setAttribute("style", "display:flex; flex-direction:column; align-items:center; width:100vw; min-width:36rem; height:100vh; min-height:900px;  margin:0; background-color:rgb(0, 128, 128);");

    //모든 시작 관련 태그 제거 
    var start_class_length = document.querySelectorAll(".start").length;

    for(var i=0;i<start_class_length;i++)
    {
        document.querySelectorAll(".start")[i].setAttribute("style", "display:none");
    }
    
    //질문 출력
    document.querySelector(".test > .question > div > div").innerText = test_question_text[document.querySelector(".test > #page").getAttribute("data-page")];
    
    //다음 선택지로 이동 
    var test_button_length = document.querySelectorAll(".test > .button").length;

    for(var i=0;i<test_button_length;i++)
    {
        document.querySelectorAll(".test > .button > button")[0].innerText = test_select_text_1[document.querySelector(".test > #page").getAttribute("data-page")];
        document.querySelectorAll(".test > .button > button")[1].innerText = test_select_text_2[document.querySelector(".test > #page").getAttribute("data-page")];
    }

    //로딩 화면 
    start_loading(next_function);
    
    //콜백 함수로 처리 
    function next_function()
    {
        document.querySelector("#main_title").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; bottom:10px; width:70%; height:0%;");

        if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
        {
            document.querySelector("#main_window").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:30em; height:43em; background-image:url(3_test/6-1.png); background-size:100% 100%;");
        }
        if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
        {
            document.querySelector("#main_window").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:840px; height:1142px; background-image:url(3_test/6-1.png); background-size:100% 100%;");
        }

        document.querySelector("#main_window > #home_content").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%; height:53%;");
        document.querySelector("#main_window > #home_button").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:100%; height:47%;");
        
        //모든 테스트 관련 태그 생성(2개)
        var test_class_length = document.querySelectorAll(".test").length;

        for(var i=0;i<test_class_length;i++)
        {
            document.querySelectorAll(".test")[i].setAttribute("style", "display:'';");
        }

        document.querySelector("#home_content > .test").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center;");
    }
}

//1번 선택지 선택 함수 
function test_select_1()
{
    var page_num = parseInt(document.querySelector(".test > #page").getAttribute("data-page"));
    
    document.querySelector(".test > #test_data").setAttribute("data-type_" + (parseInt(page_num/3) + 1), parseInt(document.querySelector(".test > #test_data").getAttribute("data-type_" + (parseInt(page_num/3) + 1))) + 1);
    
    //페이지 넘기기 
    document.querySelector(".test > #page").setAttribute("data-page", ++page_num);

    //다음 질문 출력
    document.querySelector(".test > .question > #q_text > div").innerText = test_question_text[document.querySelector(".test > #page").getAttribute("data-page")];

    //테스트가 진행중일 때 
    if(page_num < 12)
    {
        //다음 윈도우 출력
        if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
        {
            document.querySelector("#main_window").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:30em; height:43em; background-image:url(3_test/6-" + (page_num + 1) + ".png); background-size:100% 100%;");
        }
        if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
        {
            document.querySelector("#main_window").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:840px; height:1142px; background-image:url(3_test/6-" + (page_num + 1) + ".png); background-size:100% 100%;");
        }

        //페이지별 크기 조절 및 사진 출력
        switch(page_num)
        {
            case 1:
                //질문 내용 화면 크기 조절
                document.querySelector("#main_window > #home_content").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%; height:62%;");
                document.querySelector("#main_window > #home_button").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:100%; height:38%;");

                //이전 문항의 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");
                
                //버튼 위치, 크기 변경
                if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
                {
                    //document.querySelectorAll("#home_button > .test > .button")[0].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:94%; height:40%; position:absolute; bottom:48%;");
                    //document.querySelectorAll("#home_button > .test > .button")[1].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:94%; height:40%; position:absolute; top:46%;");

                    document.querySelectorAll("#home_button > .test > .button")[0].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:94%; height:40%;");
                    document.querySelectorAll("#home_button > .test > .button")[1].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:94%; height:40%;");
                }
                if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
                {

                    document.querySelectorAll("#home_button > .test > .button")[0].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:94%; height:40%;");
                    document.querySelectorAll("#home_button > .test > .button")[1].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:94%; height:40%; top:49%;");
                }

                break;
            case 2:
                //질문 내용 화면 크기 조절
                document.querySelector("#main_window > #home_content").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%; height:53%;");
                document.querySelector("#main_window > #home_button").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:100%; height:47%;");
                
                //버튼 위치 변경
                document.querySelectorAll("#home_button > .test > .button")[0].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:94%; height:40%;");
                document.querySelectorAll("#home_button > .test > .button")[1].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:94%; height:40%;");

                //이전 문상의 버튼 위치 변경
                document.querySelectorAll("#home_button > .test > .button")[0].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:100%; height:100%;");
                document.querySelectorAll("#home_button > .test > .button")[1].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:100%; height:100%;");

                //질문 글자 크기 변경 
                if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
                {
                    document.querySelector(".test > .question").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; height:50%;");
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:1.7em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }
                if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
                {
                    document.querySelector(".test > .question").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; height:50%;");
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:3em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }

                //질문 그림 크기 변경
                document.querySelector(".test > .image").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; height:45%;");
                document.querySelectorAll(".test > .question > #q_img > img")[0].setAttribute("height", "20%");

                //현재 문항의 이미지 크기 변경
                document.querySelector(".test > .image > #img_1").setAttribute("height", "90%");

                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/3/1.png");

                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:''; position:relative; bottom:15%;");

                break;
            case 3:
                //이전 문항에서 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");
                document.querySelector(".test > .image > #img_2").setAttribute("style", "display:none;");
                document.querySelector(".test > .image > #img_3").setAttribute("style", "display:none;");
                document.querySelector(".test > .image > #img_4").setAttribute("style", "display:none;");

                //질문 그림 크기 변경
                document.querySelector(".test > .image").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; height:25%;");

                //현재 문항의 이미지 크기 변경
                document.querySelector(".test > .image > #img_1").setAttribute("height", "80%");

                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/4/1.png");

                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:''; position:relative; top:15%;");
                break;
            case 4:
                //이전 문항에서 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");

                //현재 문항의 이미지 크기 변경
                document.querySelector(".test > .image > #img_1").setAttribute("height", "100%");

                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/5/1.png");

                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:''; position:relative;");
                break;
            case 5:
                //이전 문항에서 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");

                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/6/1.png");

                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:'';");
                break;
            case 6:
                //이전 문항에서 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");

                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/7/1.png");

                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:'';");
                break;
            case 7:
                //질문 글자 크기 변경 
                if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
                {
                    document.querySelector(".test > .question").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; height:50%;");
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:1.5em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }
                if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
                {
                    document.querySelector(".test > .question").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; height:50%;");
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:2.7em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }

                //이전 문항에서 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");

                //질문 그림 크기 변경
                document.querySelector(".test > .image").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; height:35%;");

                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/8/1.png");
                
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:'';");
                break;
            case 8:
                //이전 문항에서 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");
                document.querySelector(".test > .image > #img_2").setAttribute("style", "display:none;");
                
                //질문 글자 크기 변경 
                if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
                {
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:1.7em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }
                if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
                {
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:3.8em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }

                //질문 그림 크기 변경
                document.querySelector(".test > .image").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; height:25%;");

                //현재 문항의 이미지 크기 변경
                if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
                {
                    document.querySelector(".test > .image > #img_1").setAttribute("height", "130%");
                    document.querySelector(".test > .image > #img_2").setAttribute("height", "130%");
                }
                if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
                {
                    document.querySelector(".test > .image > #img_1").setAttribute("height", "120%");
                    document.querySelector(".test > .image > #img_2").setAttribute("height", "120%");
                }
                

                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/9/2.png");
                document.querySelector(".test > .image > #img_2").setAttribute("src", "3_test/9/1.png");
                
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:''; position:relative; bottom:20%; left:35%;");
                document.querySelector(".test > .image > #img_2").setAttribute("style", "display:''; position:relative; bottom:20%; right:35%;");
                break;
            case 9:
                //이전 문항에서 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");
                document.querySelector(".test > .image > #img_2").setAttribute("style", "display:none;");

                //질문 글자 크기 변경 
                if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
                {
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:1.7em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }
                if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
                {
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:3em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }

                //현재 문항의 이미지 크기 변경
                document.querySelector(".test > .image > #img_1").setAttribute("height", "50%");

                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/10/1.png");

                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:'';");
                break;
            case 10:
                //이전 문항에서 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");
                
                //질문 글자 크기 변경 
                if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
                {
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:1.5em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }
                if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
                {
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:2.7em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }

                //현재 문항의 이미지 크기 변경
                document.querySelector(".test > .image > #img_1").setAttribute("height", "80%");

                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/11/1.png");
                
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:'';");
                break;
            case 11:
                //이전 문항에서 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");

                //질문 글자 크기 변경 
                if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
                {
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:1.7em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }
                if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
                {
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:3em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }
                
                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/12/1.png");
                
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:''; position:relative; top:10%;");
                break;
        }

        //다음 질문 출력
        document.querySelector(".test > .question > div > div").innerText = test_question_text[document.querySelector(".test > #page").getAttribute("data-page")];

        //다음 선택지로 이동 
        var test_button_length = document.querySelectorAll(".test > .button").length;

        for(var i=0;i<test_button_length;i++)
        {
            document.querySelectorAll(".test > .button > button")[0].innerText = test_select_text_1[document.querySelector(".test > #page").getAttribute("data-page")];
            document.querySelectorAll(".test > .button > button")[1].innerText = test_select_text_2[document.querySelector(".test > #page").getAttribute("data-page")];
        }
    }
    else
    {
        //테스트가 끝날 때 
        //모든 테스트 관련 태그 제거 
        var test_class_length = document.querySelectorAll(".test").length;

        for(var i=0;i<test_class_length;i++)
        {
            document.querySelectorAll(".test")[i].setAttribute("style", "display:none");
        }

        //검사 결과 구하기 
        result_text = new String();

        if(document.querySelector(".test > #test_data").getAttribute("data-type_1") > 0)
        {
            result_text = result_text + "A";
        }
        else
        {
            result_text = result_text + "B";
        }
        if(document.querySelector(".test > #test_data").getAttribute("data-type_2") > 0)
        {
            result_text = result_text + "C";
        }
        else
        {
            result_text = result_text + "D";
        }
        if(document.querySelector(".test > #test_data").getAttribute("data-type_3") > 0)
        {
            result_text = result_text + "E";
        }
        else
        {
            result_text = result_text + "F";
        }
        if(document.querySelector(".test > #test_data").getAttribute("data-type_4") > 0)
        {
            result_text = result_text + "G";
        }
        else
        {
            result_text = result_text + "H";
        }

        end_loading(go_result)

        function go_result()
        {
            //결과 페이지로 이동 
            for(var i=0;i<result_type_text.length;i++)
            {
                if(result_type_text[i].indexOf(result_text) >= 0)
                {
                    location.replace("./test/result.html?type="+i);
                    break;
                }
            }
        }
    }
}

//2번 선택지 선택 함수 
function test_select_2()
{
    var page_num = parseInt(document.querySelector(".test > #page").getAttribute("data-page"));
    
    document.querySelector(".test > #test_data").setAttribute("data-type_" + (parseInt(page_num/3) + 1), parseInt(document.querySelector(".test > #test_data").getAttribute("data-type_" + (parseInt(page_num/3) + 1))) - 1);
    
    //페이지 넘기기 
    document.querySelector(".test > #page").setAttribute("data-page", ++page_num);

    //다음 질문 출력
    document.querySelector(".test > .question > #q_text > div").innerText = test_question_text[document.querySelector(".test > #page").getAttribute("data-page")];

    //테스트가 진행중일 때 
    if(page_num < 12)
    {
        //다음 윈도우 출력
        if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
        {
            document.querySelector("#main_window").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:30em; height:43em; background-image:url(3_test/6-" + (page_num + 1) + ".png); background-size:100% 100%;");
        }
        if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
        {
            document.querySelector("#main_window").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:840px; height:1142px; background-image:url(3_test/6-" + (page_num + 1) + ".png); background-size:100% 100%;");
        }

        //페이지별 크기 조절 및 사진 출력
        switch(page_num)
        {
            case 1:
                //질문 내용 화면 크기 조절
                document.querySelector("#main_window > #home_content").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%; height:62%;");
                document.querySelector("#main_window > #home_button").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:100%; height:38%;");

                //이전 문항의 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");
                
                //버튼 위치, 크기 변경
                if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
                {
                    //document.querySelectorAll("#home_button > .test > .button")[0].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:94%; height:40%; position:absolute; bottom:48%;");
                    //document.querySelectorAll("#home_button > .test > .button")[1].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:94%; height:40%; position:absolute; top:46%;");

                    document.querySelectorAll("#home_button > .test > .button")[0].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:94%; height:40%;");
                    document.querySelectorAll("#home_button > .test > .button")[1].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:94%; height:40%;");
                }
                if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
                {

                    document.querySelectorAll("#home_button > .test > .button")[0].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:94%; height:40%;");
                    document.querySelectorAll("#home_button > .test > .button")[1].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:94%; height:40%; top:49%;");
                }

                break;
            case 2:
                //질문 내용 화면 크기 조절
                document.querySelector("#main_window > #home_content").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%; height:53%;");
                document.querySelector("#main_window > #home_button").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:100%; height:47%;");
                
                //버튼 위치 변경
                document.querySelectorAll("#home_button > .test > .button")[0].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:94%; height:40%;");
                document.querySelectorAll("#home_button > .test > .button")[1].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:94%; height:40%;");

                //이전 문상의 버튼 위치 변경
                document.querySelectorAll("#home_button > .test > .button")[0].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:100%; height:100%;");
                document.querySelectorAll("#home_button > .test > .button")[1].setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:100%; height:100%;");

                //질문 글자 크기 변경 
                if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
                {
                    document.querySelector(".test > .question").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; height:50%;");
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:1.7em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }
                if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
                {
                    document.querySelector(".test > .question").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; height:50%;");
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:3em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }

                //질문 그림 크기 변경
                document.querySelector(".test > .image").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; height:45%;");
                document.querySelectorAll(".test > .question > #q_img > img")[0].setAttribute("height", "20%");

                //현재 문항의 이미지 크기 변경
                document.querySelector(".test > .image > #img_1").setAttribute("height", "90%");

                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/3/1.png");

                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:''; position:relative; bottom:15%;");

                break;
            case 3:
                //이전 문항에서 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");
                document.querySelector(".test > .image > #img_2").setAttribute("style", "display:none;");
                document.querySelector(".test > .image > #img_3").setAttribute("style", "display:none;");
                document.querySelector(".test > .image > #img_4").setAttribute("style", "display:none;");

                //질문 그림 크기 변경
                document.querySelector(".test > .image").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; height:25%;");

                //현재 문항의 이미지 크기 변경
                document.querySelector(".test > .image > #img_1").setAttribute("height", "80%");

                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/4/1.png");

                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:''; position:relative; top:15%;");
                break;
            case 4:
                //이전 문항에서 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");

                //현재 문항의 이미지 크기 변경
                document.querySelector(".test > .image > #img_1").setAttribute("height", "100%");

                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/5/1.png");

                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:''; position:relative;");
                break;
            case 5:
                //이전 문항에서 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");

                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/6/1.png");

                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:'';");
                break;
            case 6:
                //이전 문항에서 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");

                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/7/1.png");

                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:'';");
                break;
            case 7:
                //질문 글자 크기 변경 
                if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
                {
                    document.querySelector(".test > .question").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; height:50%;");
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:1.5em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }
                if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
                {
                    document.querySelector(".test > .question").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; height:50%;");
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:2.7em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }

                //이전 문항에서 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");

                //질문 그림 크기 변경
                document.querySelector(".test > .image").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; height:35%;");

                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/8/1.png");
                
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:'';");
                break;
            case 8:
                //이전 문항에서 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");
                document.querySelector(".test > .image > #img_2").setAttribute("style", "display:none;");
                
                //질문 글자 크기 변경 
                if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
                {
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:1.7em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }
                if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
                {
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:3.8em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }

                //질문 그림 크기 변경
                document.querySelector(".test > .image").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; height:25%;");

                //현재 문항의 이미지 크기 변경
                if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
                {
                    document.querySelector(".test > .image > #img_1").setAttribute("height", "130%");
                    document.querySelector(".test > .image > #img_2").setAttribute("height", "130%");
                }
                if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
                {
                    document.querySelector(".test > .image > #img_1").setAttribute("height", "120%");
                    document.querySelector(".test > .image > #img_2").setAttribute("height", "120%");
                }
                

                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/9/2.png");
                document.querySelector(".test > .image > #img_2").setAttribute("src", "3_test/9/1.png");
                
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:''; position:relative; bottom:20%; left:35%;");
                document.querySelector(".test > .image > #img_2").setAttribute("style", "display:''; position:relative; bottom:20%; right:35%;");
                break;
            case 9:
                //이전 문항에서 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");
                document.querySelector(".test > .image > #img_2").setAttribute("style", "display:none;");

                //질문 글자 크기 변경 
                if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
                {
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:1.7em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }
                if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
                {
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:3em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }

                //현재 문항의 이미지 크기 변경
                document.querySelector(".test > .image > #img_1").setAttribute("height", "50%");

                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/10/1.png");

                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:'';");
                break;
            case 10:
                //이전 문항에서 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");
                
                //질문 글자 크기 변경 
                if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
                {
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:1.5em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }
                if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
                {
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:2.7em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }

                //현재 문항의 이미지 크기 변경
                document.querySelector(".test > .image > #img_1").setAttribute("height", "80%");

                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/11/1.png");
                
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:'';");
                break;
            case 11:
                //이전 문항에서 이미지 제거
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:none;");

                //질문 글자 크기 변경 
                if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
                {
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:1.7em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }
                if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
                {
                    document.querySelector(".test > .question > #q_text > div").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; font-family: 'home_font'; font-size:3em; line-height:140%; letter-spacing:-0.1em; height:100%;");
                }
                
                //현재 문항의 이미지 생성
                document.querySelector(".test > .image > #img_1").setAttribute("src", "3_test/12/1.png");
                
                document.querySelector(".test > .image > #img_1").setAttribute("style", "display:''; position:relative; top:10%;");
                break;
        }

        //다음 질문 출력
        document.querySelector(".test > .question > div > div").innerText = test_question_text[document.querySelector(".test > #page").getAttribute("data-page")];
        
        //다음 선택지로 이동 
        var test_button_length = document.querySelectorAll(".test > .button").length;

        for(var i=0;i<test_button_length;i++)
        {
            document.querySelectorAll(".test > .button > button")[0].innerText = test_select_text_1[document.querySelector(".test > #page").getAttribute("data-page")];
            document.querySelectorAll(".test > .button > button")[1].innerText = test_select_text_2[document.querySelector(".test > #page").getAttribute("data-page")];
        }
    }
    else
    {
        //테스트가 끝날 때 
        //모든 테스트 관련 태그 제거
        var test_class_length = document.querySelectorAll(".test").length;

        for(var i=0;i<test_class_length;i++)
        {
            document.querySelectorAll(".test")[i].setAttribute("style", "display:none");
        }

        //검사 결과 구하기 
        result_text = new String();

        if(document.querySelector(".test > #test_data").getAttribute("data-type_1") > 0)
        {
            result_text = result_text + "A";
        }
        else
        {
            result_text = result_text + "B";
        }
        if(document.querySelector(".test > #test_data").getAttribute("data-type_2") > 0)
        {
            result_text = result_text + "C";
        }
        else
        {
            result_text = result_text + "D";
        }
        if(document.querySelector(".test > #test_data").getAttribute("data-type_3") > 0)
        {
            result_text = result_text + "E";
        }
        else
        {
            result_text = result_text + "F";
        }
        if(document.querySelector(".test > #test_data").getAttribute("data-type_4") > 0)
        {
            result_text = result_text + "G";
        }
        else
        {
            result_text = result_text + "H";
        }

        end_loading(go_result)

        function go_result()
        {
            //결과 페이지로 이동 
            for(var i=0;i<result_type_text.length;i++)
            {
                if(result_type_text[i].indexOf(result_text) >= 0)
                {
                    location.replace("./test/result.html?type="+i);
                    break;
                }
            }
        }
    }
}

function test_restart()
{
    //페이지 초기화 
    document.querySelector(".test > #page").setAttribute("data-page", "0");

    //검사결과 초기화 
    document.querySelector(".test > #test_data").setAttribute("data-type_1", "0");
    document.querySelector(".test > #test_data").setAttribute("data-type_2", "0");
    document.querySelector(".test > #test_data").setAttribute("data-type_3", "0");
    document.querySelector(".test > #test_data").setAttribute("data-type_4", "0");

    //모든 시작 관련 태그 제거 
    var start_class_length = document.querySelectorAll(".result").length;

    for(var i=0;i<start_class_length;i++)
    {
        document.querySelectorAll(".result")[i].setAttribute("style", "display:none");
    }

    //모든 테스트 관련 태그 생성 
    var test_class_length = document.querySelectorAll(".start").length;

    for(var i=0;i<test_class_length;i++)
    {
        document.querySelectorAll(".start")[i].setAttribute("style", "display:''");
    }
}

function start_loading(next_function)
{
    function loading_on()
    {
        document.querySelector(".loading").setAttribute("style", "display:''");
        
        //배경화면 변경
        document.querySelector("#body_top").setAttribute("style", "display:flex; flex-direction:row; justify-content:start; align-items:center; width:100%; height:20%; background-image:url(3_test/background_1.png); background-size:contain; background-repeat:no-repeat; width:100%; height:109px; background-color:rgb(0, 128, 128);");
        document.querySelector("#body_middle").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; flex:1; width:100%; background:rgb(0, 128, 128);");
        document.querySelector("#body_bottom > #bottom_left").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; width:384px; height:100%; background-image:url(3_test/background_2.png); background-size: cover; background-repeat:no-repeat;");
        
        if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
        {
            document.querySelector("#body_bottom > #bottom_right").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; flex:1; height:100%; background-image:url(3_test/background_3.png); background-size: cover; background-repeat:no-repeat;");
        }
        if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
        {
            document.querySelector("#body_bottom > #bottom_right").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; flex:1; height:100%; background-image:url(3_test/background_3.png); background-size: contain; background-repeat:repeat;");
        }
        
        //로딩 페이지 생성
        document.querySelector("#main_title").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; height:22%;");
        document.querySelector("#main_window").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; position:relative; bottom:10%; width:80%; height:25%; background-image:url(2_loading/1.png); background-size: contain; background-repeat:no-repeat; background-position:center;");
    }

    function loading_off()
    {
        document.querySelector(".loading").setAttribute("style", "display:none");

        //로딩화면 끄고 다음 함수 실행 
        next_function();
    }

    //로딩화면 켜기 
    loading_on();
    //2초뒤에 로딩화면 끄기
    setTimeout(loading_off, 2000);
}

function end_loading(next_function)
{
    function loading_on()
    {
        document.querySelector(".loading").setAttribute("style", "display:''");

        //로딩 페이지 생성
        document.querySelector("#main_title").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; height:22%;");
        document.querySelector("#main_window").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; position:relative; bottom:10%; align-items:center; width:80%; height:25%; background-image:url(2_loading/2.png); background-size: contain; background-repeat:no-repeat; background-position:center;");
    }

    function loading_off()
    {
        //로딩화면 끄고 다음 함수 실행 
        next_function();
    }

    //로딩화면 켜기 
    loading_on();
    //2초뒤에 로딩화면 끄기
    setTimeout(loading_off, 2000);
}

//질문 텍스트 
test_question_text[0] = new String("RPG 게임을 새로\n시작하게 된 당신!\n그 이유는...");
test_question_text[1] = new String("게임을 시작한 당신!\n낯선 사람이 말을\n거는데...");
test_question_text[2] = new String("친구들과 길드를 만들었다!\n길드를 관리하는 운영진\n자리를 제의 받은 당신은...");
test_question_text[3] = new String("게임을 진행할수록\n점점 빠져드는 당신!\n재미를 느끼는 핵심\n포인트를 하나 꼽자면...");
test_question_text[4] = new String("메인 퀘스트 외에도,\n많은 서브 퀘스트들을\n발견한 당신은...");
test_question_text[5] = new String("게임을 하던 당신이\n중간에 게임 가이드를\n 켜보는 이유는...");
test_question_text[6] = new String("게임을 같이하던 친구가\n한 말에 당신은 기분이\n 좋아졌다!\n그게 무슨 말이었냐면...");
test_question_text[7] = new String("\"나 어제 밤새 사냥해서\n전설 아이템 얻었다!\"는\n친구의 귓말에,\n 당신의 머릿속에 가장\n먼저 떠오르는 생각은...");
test_question_text[8] = new String("퀘스트 진행 중\n마주친 두 NPC!\n더 마음이 가는 쪽은...");
test_question_text[9] = new String("이제 \'고인물\'이 되어\n가는 당신! 게임을\n즐기며 고민하고\n있는 부분은...?");
test_question_text[10] = new String("게임 회사에서\n 소정의 선물을 주며,\n\'1분 목소리'에\n참여해달라는 제안에\n당신은 먼저...");
test_question_text[11] = new String("친구들이 매주 토요일\n오후 9시에 파티 퀘스트를\n같이 하자고 한다.\n이때 당신은?");

//1번 선택지
test_select_text_1[0] = new String("인터넷으로 보니 재미있어 보여서");
test_select_text_1[1] = new String("어떤 사람인지도 모르는데... (무시한다)");
test_select_text_1[2] = new String("이왕 하는 거 운영진도 해봐야지!");
test_select_text_1[3] = new String("퀘스트를 깨고 보상을 받는 성취감!\n(아이템 수집)");
test_select_text_1[4] = new String("일단 메인 퀘스트부터 더 깨보고 생각할래.");
test_select_text_1[5] = new String("빠뜨린 거 없는지 가이드에서 찾아볼까?\n(정독 후 플레이)");
test_select_text_1[6] = new String("넌 게임 자주 하지도 않으면서\n실력은 되게 좋네.");
test_select_text_1[7] = new String("와 그거 얼마짜리일까?");
test_select_text_1[8] = new String("불우한 환경에서\n 흑화할 수 밖에 없었던 악당");
test_select_text_1[9] = new String("이미 클리어한 퀘스트라도,\n어떻게 다르게 즐길 수 있을지 고민한다");
test_select_text_1[10] = new String("친구들한테 자랑해야지!");
test_select_text_1[11] = new String("그냥 가고 싶을 때 가면 안 되나?ㅠ");

//2번 선택지 
test_select_text_2[0] = new String("친구들이랑 같이 하려고");
test_select_text_2[1] = new String("혼자라 심심했는데 그럴까? (친구 수락)");
test_select_text_2[2] = new String("운영진은 좀 부담... 길드원으로 남는다!");
test_select_text_2[3] = new String("오픈월드에서 자유롭게 탐험하는 재미!\n(세계관 탐험)");
test_select_text_2[4] = new String("할 게 많으면 더 좋아! 이 맛에 게임하지.");
test_select_text_2[5] = new String("어, 내가 알던 게 맞나...? 확인해봐야지\n(그때그때 필요한 부분 찾기)");
test_select_text_2[6] = new String("넌 게임할 때도 부지런하네~\n언제 그렇게 키웠어?");
test_select_text_2[7] = new String("와 밤새 사냥하느라 진짜 힘들었겠다...!");
test_select_text_2[8] = new String("불우한 환경에도\n 역경을 헤치고 성장한 영웅");
test_select_text_2[9] = new String("아이템과 스킬 종류를 파악하고,\n 나에게 없는 걸 어떻게 채울지 고민한다");
test_select_text_2[10] = new String("어떤 내용으로 준비할지 개요부터 짜볼까!");
test_select_text_2[11] = new String("그래 그러자! (캘린더에 표시한다)");

//결과 텍스트
result_type_text[0] = new String("ADEH");
result_type_text[1] = new String("ADEG");
result_type_text[2] = new String("BDEH");
result_type_text[3] = new String("BDEG");
result_type_text[4] = new String("ADFH");
result_type_text[5] = new String("ADFG");
result_type_text[6] = new String("BDFH");
result_type_text[7] = new String("BDFG");
result_type_text[8] = new String("ACEH");
result_type_text[9] = new String("ACFH");
result_type_text[10] = new String("BCEH");
result_type_text[11] = new String("BCFH");
result_type_text[12] = new String("ACEG");
result_type_text[13] = new String("ACFG");
result_type_text[14] = new String("BCEG");
result_type_text[15] = new String("BCFG");





