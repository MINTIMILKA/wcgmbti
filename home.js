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
    document.querySelector(".test > .question > div > div").innerText = test_question_text[document.querySelector(".test > #page").getAttribute("data-page")];
    
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
        document.querySelector("#main_title").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; position:relative; bottom:10px; width:70%; height:0%;");
        
        document.querySelector("#main_window").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:90%; height:100%; position:relative; background-image:none;");
        
        document.querySelector("#main_window > .test_window > img").setAttribute("width", "100%");
        document.querySelector("#main_window > .test_window > img").setAttribute("height", "136%");
        document.querySelector("#main_window > .test_window").setAttribute("style", "display:''; position:relative; bottom:18%;");

        document.querySelector("#main_window > #home_content").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%; height:53%; position:absolute; bottom:50%;");
        document.querySelector("#main_window > #home_button").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items: center; width:100%; height:45%; position:absolute; top:55%;");
        
        
        //모든 테스트 관련 태그 생성(2개)
        var test_class_length = document.querySelectorAll(".test").length;

        for(var i=0;i<test_class_length;i++)
        {
            document.querySelectorAll(".test")[i].setAttribute("style", "display:'' position:absolute; top:50%;");
        }
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
    document.querySelector(".test > .question > div > div").innerText = test_question_text[document.querySelector(".test > #page").getAttribute("data-page")];

    //테스트가 진행중일 때 
    if(page_num < 12)
    {
        //다음 윈도우 출력
        document.querySelector("#main_window > .test_window > img").setAttribute("src", "3_test/6-" + (page_num + 1) + ".png");

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
    
    //페이지 넘기기 
    document.querySelector(".test > #page").setAttribute("data-page", ++page_num);

    //다음 질문 출력
    document.querySelector(".test > .question > div > div").innerText = test_question_text[document.querySelector(".test > #page").getAttribute("data-page")];

    //테스트가 진행중일 때 
    if(page_num < 12)
    {
        //다음 윈도우 출력
        document.querySelector("#main_window > .test_window > img").setAttribute("src", "3_test/6-" + (page_num + 1) + ".png");

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
        
        //배경화면 변경
        document.querySelector("#body_top").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center;  width:100%; height:20%; background-image:url(3_test/background_1.png); background-size:contain; background-repeat:no-repeat; background-color:rgb(0, 128, 128);");
        document.querySelector("#body_middle").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; flex:1; width:100%; background:rgb(0, 128, 128);");
        document.querySelector("#body_bottom > #bottom_left").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; width:384px; height:100%; background-image:url(3_test/background_2.png); background-size: cover; background-repeat:no-repeat;");
        document.querySelector("#body_bottom > #bottom_right").setAttribute("style", "display:flex; flex-direction:row; justify-content:center; align-items:center; flex:1; height:100%; background-image:url(3_test/background_3.png); background-size: cover; background-repeat:no-repeat;");
        
        //로딩 페이지 생성
        document.querySelector("#main_title").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; height:22%;");
        document.querySelector("#main_window").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:80%; height:25%; background-image:url(2_loading/1.png); background-size: contain; background-repeat:no-repeat; background-position:center;");
    }

    function loading_off()
    {
        document.querySelector("#main_window").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:80%; height:25%; background-image:none; background-size: contain; background-repeat:no-repeat; background-position:center;");
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
test_question_text[0] = new String("RPG 게임을 새로\n시작하게 된 당신!\n그 이유는...");
test_question_text[1] = new String("튜토리얼 중,\n처음 보는 사람들과\n 파티를 맺게 된 당신!");
test_question_text[2] = new String("친한 친구들이 당신을\n따라 게임을 설치했다!\n우리끼리 길드를 만들어\n재밌게 해보자는\n친구들에게 당신은...");
test_question_text[3] = new String("게임을 진행할수록\n점점 빠져드는 당신!\n재미를 느끼는 핵심\n포인트를 하나 꼽자면...");
test_question_text[4] = new String("메인 퀘스트 외에도,\n엄청나게 방대한\n서브 퀘스트들이 있다는\n사실을 알게 된 당신은...");
test_question_text[5] = new String("이제 게임의 기본은\n이해한 당신!\n그럼에도 불구하고 게임\n가이드를 켜보는 이유는...");
test_question_text[6] = new String("게임으로 침해진\n\'랜선친구\'가 한 말에\n 당신을 기분이 좋아졌다!\n그게 무슨 말이었냐면...");
test_question_text[7] = new String("\"나 힘들게 40시간 갈아\n넣어서 12강 아이템 만듬\"\n이라는 친구의 귓말에,\n당신의 머릿속에 가장\n먼저 떠오르는 생각은...");
test_question_text[8] = new String("퀘스트 진행 중\n알게 된 두 NPC!\n더 마음이 가는 쪽은...");
test_question_text[9] = new String("이제 \'고인물\'이\n 되어버린 당신!\n본격적으로 게임을\n즐기기 시작한 당신은...");
test_question_text[10] = new String("게임 회사에서\n소정의 기프티콘을 주며,\n\'1분으ㅏㅣ 목서리 인터뷰\'에 참여해달라는 제안에\n 당신이 준비하는 내용은...");
test_question_text[11] = new String("게임을 하다가\n정이 뚝 떨어져서\n게임을 접게 된 당신!\n그 이유는...");

//1번 선택지
test_select_text_1[0] = new String("인터넷으로 보니 재미있어 보여서");
test_select_text_1[1] = new String("일단 어떤 사람들일지 분위기 좀 보고...");
test_select_text_1[2] = new String("만들고 싶으면 만들어! 가입은 할게");
test_select_text_1[3] = new String("퀘스트를 깨고 보상을 받는 성취감!\n(아이템 수집)");
test_select_text_1[4] = new String("좀 해보니까 너무 뭐가 복잡하고 많은데;;\n일단 메인 퀘스트부터 더 깨보고 생각할래.");
test_select_text_1[5] = new String("감 잡았으니 이제 가이드를 읽어볼까?\n(정독 후 플레이)");
test_select_text_1[6] = new String("뭐야 나처럼 팬심으로 하는 줄 알았는데,\n넌 게임 별로 하지도 않으면서 실력 좋네.");
test_select_text_1[7] = new String("헐 12강이면 얼마짜리지...?");
test_select_text_1[8] = new String("불우한 환경에서\n 흑화할 수 밖에 없었던 악당");
test_select_text_1[9] = new String("이미 해본 스테이지더라도,\n또 어떻게 다르게 즐길 수 있을지 고민한다");
test_select_text_1[10] = new String("게임에 대한 전체적인 느낌과 소감을\n재미있게 말하기");
test_select_text_1[11] = new String("딱히 끌리는 콘텐츠도 없고,\n다 거기서 거기일 거 같은 뻔한 느낌...");

//2번 선택지 
test_select_text_2[0] = new String("친구들이랑 같이 하려고");
test_select_text_2[1] = new String("그럴까? (마이크 on)");
test_select_text_2[2] = new String("그래! 내가 만들지 뭐");
test_select_text_2[3] = new String("여기저기 모험하면서 배워가는 재미!\n(세계관 탐험)");
test_select_text_2[4] = new String("오~ 뭔지는 모르겠지만 할 수 잇는게\n많으면 오히려 좋아;; 이 맛에 게임하지!");
test_select_text_2[5] = new String("어, 내가 알던 게 맞나...? 확인해봐야지\n(그때그때 필요한 부분 찾기)");
test_select_text_2[6] = new String("와 나는 세계관 신경 안 써서 몰랐는데,\n너는 이 게임에 진심이구나. 섬세하다.");
test_select_text_2[7] = new String("헐 40시간 동안 혼자 어떤 싸움을 한거야...?");
test_select_text_2[8] = new String("불우한 환경에도\n 역경을 헤치고 성장한 소년");
test_select_text_2[9] = new String("아이템과 스킬 종류를 파악하고,\n 내가 없는 걸 채우기 위해 고민한다");
test_select_text_2[10] = new String("구체적으로 게임의 어떤 부분이\n재밌었는지 말하기");
test_select_text_2[11] = new String("밸런스도 엉망이고, 완성도가 떨어져서 몰입이 안 돼...");

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





