//텍스트 문자열
var test_question_text = new Array(12);
var test_select_text_1 = new Array(12);
var test_select_text_2 = new Array(12);

//결과 문자열 
var result_type_text = new Array(16);
var result_name_text = new Array(16);
var reuslt_info_text = new Array(16);

//테스트 시작 함수
function test_start()
{
    //모든 시작 관련 태그 제거 
    var start_class_length = document.querySelectorAll(".start").length;

    for(var i=0;i<start_class_length;i++)
    {
        document.querySelectorAll(".start")[i].setAttribute("style", "display:none");
    }

    //질문 출력
    document.querySelector(".test > .question > p").innerText = test_question_text[document.querySelector(".test > #page").getAttribute("data-page")];
    
    //다음 선택지로 이동 
    var test_button_length = document.querySelectorAll(".test > .button").length;

    for(var i=0;i<test_button_length;i++)
    {
        document.querySelectorAll(".test > .button > button")[0].innerText = test_select_text_1[document.querySelector(".test > #page").getAttribute("data-page")];
        document.querySelectorAll(".test > .button > button")[1].innerText = test_select_text_2[document.querySelector(".test > #page").getAttribute("data-page")];
    }

    //로딩 화면 
    loading(next_function);
    
    //콜백 함수로 처리 
    function next_function()
    {
        //테스트 화면 크기 늘리기
        document.querySelector("#title").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%; height:13%;");
        document.querySelector("#main_window").setAttribute("style", "height:80%");

        //질문지 화면 크기 맞추기 
        document.querySelector("#home_content").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%; height:50%; margin:0;");
        document.querySelector("#home_button").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:101%; height:50%; border-top:solid; border-width:2px; background: rgb(232, 232, 232);");

        //화면 사이 공간 오차 맞추기
        document.querySelector("#main_window > #screen_out > #screen_in").setAttribute("style", "height:98.5%");
        
        //세로 스크롤 크기 오차 맞추기 
        document.querySelector("#main_window > #screen_out > #screen_in > #screen_in_column_1 > #height_scroll > #top_button").setAttribute("style", "height:2%; width:100%; background:rgb(204, 204, 204); border-bottom:solid; border-left:solid; border-width:2px;");
        document.querySelector("#main_window > #screen_out > #screen_in > #screen_in_column_1 > #height_scroll > #height_scroll_bar").setAttribute("style", "height:95.5%; width:100%; background:rgb(204, 204, 204); border-left:solid; border-width:2px;");
        document.querySelector("#main_window > #screen_out > #screen_in > #screen_in_column_1 > #height_scroll > #bottom_button").setAttribute("style", "height:2.5%; width:100%; background:rgb(204, 204, 204); border-top:solid; border-left:solid; border-width:2px;");

        //가로 스크롤 크기 오차 맞추기 
        document.querySelector("#main_window > #screen_out > #screen_in > #screen_in_column_1").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; width:99%; height:98%;");
        document.querySelector("#main_window > #screen_out > #screen_in > #screen_in_column_2").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; width:100%; height:2%; border-top:solid; border-width:2px;"); 

        //모든 테스트 관련 태그 생성 
        var test_class_length = document.querySelectorAll(".test").length;

        for(var i=0;i<test_class_length;i++)
        {
            document.querySelectorAll(".test")[i].setAttribute("style", "display:''");
        }
    }
}

//1번 선택지 선택 함수 
function test_select_1()
{
    var page_num = parseInt(document.querySelector(".test > #page").getAttribute("data-page"));
    
    document.querySelector(".test > #test_data").setAttribute("data-type_" + (parseInt(page_num/3) + 1), parseInt(document.querySelector(".test > #test_data").getAttribute("data-type_" + (parseInt(page_num/3) + 1))) + 1);
    
    //console.log("페이지: " + (parseInt(page_num/3)+1));
    //console.log("테스트: " + document.querySelector(".test > #test_data").getAttribute("data-type_1") + ", " + document.querySelector(".test > #test_data").getAttribute("data-type_2") + ", " + document.querySelector(".test > #test_data").getAttribute("data-type_3") + ", " + document.querySelector(".test > #test_data").getAttribute("data-type_4"));

    //페이지 넘기기 
    document.querySelector(".test > #page").setAttribute("data-page", ++page_num);

    //테스트가 진행중일 때 
    if(page_num < 12)
    {

        //질문지 화면 크기 맞추기 
        document.querySelector("#home_content").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%; height:50%; margin:0;");
        document.querySelector("#home_button").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:101%; height:50%; border-top:solid; border-width:2px; background: rgb(232, 232, 232);");

        //다음 질문 출력
        document.querySelector(".test > .question > p").innerText = test_question_text[document.querySelector(".test > #page").getAttribute("data-page")];

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

        loading(go_result)

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
    
    //console.log("페이지: " + (parseInt(page_num/3)+1));
    //console.log("테스트: " + document.querySelector(".test > #test_data").getAttribute("data-type_1") + ", " + document.querySelector(".test > #test_data").getAttribute("data-type_2") + ", " + document.querySelector(".test > #test_data").getAttribute("data-type_3") + ", " + document.querySelector(".test > #test_data").getAttribute("data-type_4"));

    //페이지 넘기기 
    document.querySelector(".test > #page").setAttribute("data-page", ++page_num);

    //다음 질문 출력
    document.querySelector(".test > .question > p").innerText = test_question_text[document.querySelector(".test > #page").getAttribute("data-page")];

    //테스트가 진행중일 때 
    if(page_num < 12)
    {
        //다음 질문 출력
        document.querySelector(".test > .question > p").innerText = test_question_text[document.querySelector(".test > #page").getAttribute("data-page")];
        
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

        loading(go_result)

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

function loading(next_function)
{
    function loading_on()
    {
        document.querySelector(".loading").setAttribute("style", "display:''");
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

//질문 텍스트 
test_question_text[0] = new String("야근 후 녹초가 된 채 집에 들어온 당신, 스트레스를 해소하기 위해 당신은…");
test_question_text[1] = new String("오늘따라 개운하게 일어난 아침, 여유롭게 집을 나섰는데 운 좋게도 바로 엘레베이터를 탔다! 아무도 없는 빈 엘레베이터에 들어가며 당신은 바로…");
test_question_text[2] = new String("친구와 이런저런 이야기를 주고받으며 연락하던 당신은…");
test_question_text[3] = new String("밥을 먹으며 멍 때리던 당신에게 앞에 있던 친구가 “너 무슨 생각해?”라고 묻자, “아무 생각 안 해.”라고 답한 당신은…");
test_question_text[4] = new String("강아지는 야옹, 고양이는 멍멍’이라는 내용을 선생님이 내일모레 시험에 나오니 꼭 외우라고 강조하신다. 그러나 당신의 상식으로는 도저히 이해가 가지 않는다. 이때 당신은…");
test_question_text[5] = new String("전시회 관람 중 당신의 마음을 사로잡은 그림 앞에 선 당신! 그림을 보며 생각하기를…");
test_question_text[6] = new String("같은 반 친구들에게 롤링페이퍼를 받은 당신! 여러 칭찬이 쓰여있지만 그 중에서 가장 기분 좋은 칭찬은…");
test_question_text[7] = new String("에세이 공모전에 제출하기 전, 깐깐하고 무섭기로 유명한 국어 선생님에게 피드백을 받은 당신. “나쁘지 않네, 이 부분만 더 수정하면 되겠어.”라는 답변에 당신은…");
test_question_text[8] = new String("당신이 별로 친하다고 생각하지 않는 사람이 갑자기 본인의 힘든 이야기를 털어놓는다. 적당히 넘어가기 위해 당신은…");
test_question_text[9] = new String("내가 ‘좋아하는’ 수업에서 레포트 과제를 받은 당신! 수업 종료 후 강의실을 나오며 생각하기를…");
test_question_text[10] = new String("오랜만에 연락한 친구와 11월(다음 달)에 약속을 잡기로 했다. 이때 당신의 대답은?");
test_question_text[11] = new String("애인과의 1주년 기념 여행을 계획한 당신! 여행 전날 만반의 준비를 끝내고 일찍 누웠는데 갑자기 폭풍이 살짝 빗겨가며 강풍과 비가 동반될 수도 있다는 소식을 듣고….");

//1번 선택지
test_select_text_1[0] = new String("집에서 혼술, 게임, 영화 감상, 혹은 잠을 많이 잔다");
test_select_text_1[1] = new String("좋아하는 노래를 들으며 구석으로 간다");
test_select_text_1[2] = new String("원래 카톡으로 대화하는 편이고, 많이 친해지면 깊은 이야기 할 때만 전화로!");
test_select_text_1[3] = new String("정말로 아무 생각 안 하고 있었다");
test_select_text_1[4] = new String("뭐 어쩔 수 없지. 당장 내일모레 시험에 나온다니까 일단은 외워야겠다.");
test_select_text_1[5] = new String("색 조합이 진짜 아름답다. 색감 고르고 배치하는 감각이 좋네. 잘 그렸다.");
test_select_text_1[6] = new String("너는 내가 본 사람 중 제일 똑똑해! 못 하는 게 없고 모르는 게 없어서 잘 알려주는 든든한 친구👍");
test_select_text_1[7] = new String("인정도 받고 수정할 부분도 정확히 짚어주시니까 좋네.");
test_select_text_1[8] = new String("그랬군요… 이제 괜찮을 거에요 화이팅! (리액션)");
test_select_text_1[9] = new String("일단 자료조사부터 좀 해보고 어떻게 할지 생각해봐야겠다.");
test_select_text_1[10] = new String("좋아~ 그럼 11월에 상황 보고 얘기하자~!");
test_select_text_1[11] = new String("별 일 없이 빗겨갈 수도 있는 거잖아? 내일 상황 보고 안 좋아지면 근처 고급 호텔에서 호캉스 하지 뭐!");

//2번 선택지 
test_select_text_2[0] = new String("애인/친한 친구에게 전화를 걸어 오늘 있었던 일을 밤새 털어놓는다");
test_select_text_2[1] = new String("좋아하는 노래를 흥얼거리며 거울을 보고 머리스타일과 옷매무새를 가듬는다");
test_select_text_2[2] = new String("친해지고 편해지면 전화하거나 만나서 떠드는 게 재밌다!");
test_select_text_2[3] = new String("뜬금 없는 망상 혹은 미래 계획에 대한 상상이었는데 굳이 지금 주저리 주저리 말하기 귀찮아서 둘러댄 것");
test_select_text_2[4] = new String("어떻게 그럴 수 있지? 납득이 가야 외우든 말든 하지. 나만 이런 생각 하나?");
test_select_text_2[5] = new String("이 그림은 밝은 분위기 속에 슬픈 마음을 숨겨둔 느낌이네. 의도한 걸까? 진짜 잘 그렸다.");
test_select_text_2[6] = new String("너는 나한테 가장 소중한 친구야! 너처럼 착하고 섬세하고 성숙한 사람이 내 친구라서 든든해😊");
test_select_text_2[7] = new String("일주일 내내 붙들고 쓴 건데 “나쁘지 않다”고…?");
test_select_text_2[8] = new String("그때 왜 그 당사자한테 바로 말 안 한 거에요? (질문)");
test_select_text_2[9] = new String("일단 개요를 좀 짜볼까! 대충 목차랑 키워드는 이 정도 하면 될 거 같네.");
test_select_text_2[10] = new String("대충 11월 첫째주 주말 정도 어때?");
test_select_text_2[11] = new String("아… 에반데;; 플랜B랑 플랜C 코스 대충 짜보고 남친/여친한테 연락해서 물어봐야겠다 날씨 짜증나ㅠ");

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





