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
            result_text = result_text + "I";
        }
        else
        {
            result_text = result_text + "E";
        }
        if(document.querySelector(".test > #test_data").getAttribute("data-type_2") > 0)
        {
            result_text = result_text + "S";
        }
        else
        {
            result_text = result_text + "N";
        }
        if(document.querySelector(".test > #test_data").getAttribute("data-type_3") > 0)
        {
            result_text = result_text + "T";
        }
        else
        {
            result_text = result_text + "F";
        }
        if(document.querySelector(".test > #test_data").getAttribute("data-type_4") > 0)
        {
            result_text = result_text + "P";
        }
        else
        {
            result_text = result_text + "J";
        }

        //결과 출력 
        for(var i=0;i<result_type_text.length;i++)
        {
            if(result_type_text[i].indexOf(result_text) >= 0)
            {
                document.querySelector(".result > .text > p").innerText = result_type_text[i];
                document.querySelector(".result > .name > p").innerText = result_name_text[i];
                document.querySelector(".result > .info > p").innerText = reuslt_info_text[i];
                break;
            }
        }

        //로딩 화면 
        loading(next_function);

        //콜백 함수로 처리 
        function next_function()
        {
            //모든 결과 관련 태그 생성
            var result_class_length = document.querySelectorAll(".result").length;

            for(var i=0;i<result_class_length;i++)
            {
                document.querySelectorAll(".result")[i].setAttribute("style", "display:''");
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
            result_text = result_text + "I";
        }
        else
        {
            result_text = result_text + "E";
        }
        if(document.querySelector(".test > #test_data").getAttribute("data-type_2") > 0)
        {
            result_text = result_text + "S";
        }
        else
        {
            result_text = result_text + "N";
        }
        if(document.querySelector(".test > #test_data").getAttribute("data-type_3") > 0)
        {
            result_text = result_text + "T";
        }
        else
        {
            result_text = result_text + "F";
        }
        if(document.querySelector(".test > #test_data").getAttribute("data-type_4") > 0)
        {
            result_text = result_text + "P";
        }
        else
        {
            result_text = result_text + "J";
        }

        //결과 출력 
        for(var i=0;i<result_type_text.length;i++)
        {
            if(result_type_text[i].indexOf(result_text) >= 0)
            {
                document.querySelector(".result > .text > p").innerText = result_type_text[i];
                document.querySelector(".result > .name > p").innerText = result_name_text[i];
                document.querySelector(".result > .info > p").innerText = reuslt_info_text[i];
                break;
            }
        }

        //로딩 화면 
        loading(next_function);

        //콜백 함수로 처리 
        function next_function()
        {
            //모든 결과 관련 태그 생성
            var result_class_length = document.querySelectorAll(".result").length;

            for(var i=0;i<result_class_length;i++)
            {
                document.querySelectorAll(".result")[i].setAttribute("style", "display:''");
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
result_type_text[0] = new String("INTJ");
result_type_text[1] = new String("INTP");
result_type_text[2] = new String("ENTJ");
result_type_text[3] = new String("ENTP");
result_type_text[4] = new String("INFJ");
result_type_text[5] = new String("INFP");
result_type_text[6] = new String("ENFJ");
result_type_text[7] = new String("ENFP");
result_type_text[8] = new String("ISTJ");
result_type_text[9] = new String("ISFJ");
result_type_text[10] = new String("ESTJ");
result_type_text[11] = new String("ESFJ");
result_type_text[12] = new String("ISTP");
result_type_text[13] = new String("ISFP");
result_type_text[14] = new String("ESTP");
result_type_text[15] = new String("ESFP");

//결과 이름
result_name_text[0] = new String("- 체스 천재st");
result_name_text[1] = new String("‘겜’믈리에- ");
result_name_text[2] = new String("대담한 도전자");
result_name_text[3] = new String("유쾌한 병맛 트롤러");
result_name_text[4] = new String("심오한 평론가");
result_name_text[5] = new String("평화 지킴이");
result_name_text[6] = new String("정의로운 길드장");
result_name_text[7] = new String("귀여운 뉴비 모험가");
result_name_text[8] = new String("차근차근 건축가");
result_name_text[9] = new String("아바타 돌봄이");
result_name_text[10] = new String("메타버스 사장님");
result_name_text[11] = new String("미완");
result_name_text[12] = new String("뚝딱뚝딱 게임 장인");
result_name_text[13] = new String("게임대학교 예술학부");
result_name_text[14] = new String("노빠꾸 ‘겜’블러");
result_name_text[15] = new String("현실 인싸");

//결과 설명
reuslt_info_text[0] = new String("- 스토리의 완성도(고증, 개연성)와 연출 중시\n- 멱살 캐리하는 통솔가보다는 용의주도한 전략가, 내 똑똑함이 증명되면 기분 GOOD\n- 일상의 대부분을, 심지어 게임조차 분석하며 즐김\n- *주의사항 : 밖에 나가서 친구들도 만나세요….!");
reuslt_info_text[1] = new String("- 게임의 재미? 색다른 세계에 푹 빠져서 알아가는 그 과정 자체가 흥미로움\n- 내가 다 알고 잘하는 게임이 되면 흥미제로, 내가 모르는 또 다른 색다른 세계가 끌림!\n- 진지해보이지만 은근히 똘기 많음\n- *주의사항 : 나만 재밌는 게임일 수 있으니 친구한테 설명하는 건 눈치껏….!");
reuslt_info_text[2] = new String("- 테크트리? 공식 루트? 아니 난 마음대로 할거야!\n- 이겨야 재밌지! 게임은 이기려고 하는 것!\n- ‘내가 잘해서 이길 때’ 희열을 느낌\n- 은근히 불도저 스타일\n- *주의사항 : 게임하다가 답답하다고 막말하지 않기~");
reuslt_info_text[3] = new String("- 평범하고 잔잔한 스토리는 별로… 새롭고 짜릿한 게 좋아…⭐️\n- 일부로 트롤짓 하면서 친구들 괴롭히는 데에서 희열을 느낌\n- 똘기 많아보이고 실제로 똘기가 많음\n- *주의사항 : 나만 재밌는 장난일 수 있으니 눈치는 좀 챙깁시다!");
reuslt_info_text[4] = new String("- 고민거리를 던져주는, 영화 같은 스토리의 게임에 몰입함\n- 이분법적이지 않은 복잡한 감정선과 전개 방식에 매력을 느낌\n- 겉보기에는 친절하고 착해보이지만 속은 심오한 고민들로 가득 차있음\n- *주의사항 : 결정장애 멈춰!!");
reuslt_info_text[5] = new String("- 동x의 숲, 스x듀밸리 같이 평화롭고 아기자기한 게임이 최고로 좋아!\n- 잔잔한 감동, 또는 귀엽고 소소한 스토리에 잘 빠져듬\n- 사람을 좋아하긴 하지만 적당히 거리 두며 혼자 집에 있기 좋아하는 성격\n- *주의사항 : 밖에 나가서 친구들도 만나세요….!");
reuslt_info_text[6] = new String("- 사람들을 관찰하고 옳은 길로 이끄는 스토리의 게임을 좋아함\n- 온라인 게임에서는 이미 정의롭고 듬직한 클랜장으로 활동중\n- 사람을 좋아하고 속이 깊고 강한 사람\n- *주의사항 : 때로는 너무 다른 사람이 있을 수 있어요. 그럴땐 그냥 보내주는 것도 방법이랍니다!");
reuslt_info_text[7] = new String("- 게임은 혼자서 하면 재미 없어ㅠ 무조건 친구랑!\n- 게임 자체가 재밌기보다, 함께 즐기는 사람들과 그 분위기가 좋아서~🤗\n- 사람을 무지무지 좋아하고 정이 많음\n- *주의사항 : 사람을 너무 믿지 마세요! 상처 받으면 슬퍼ㅠㅠ");
reuslt_info_text[8] = new String("- 특유의 성실함을 주체하지 못하고 장시간 플레이하는 전략 게임이나 크래프팅 게임 좋아함\n- 작은 것들을 차곡차곡 모아 원하는 결과를 만들어낼 때의 그 뿌듯함과 성취감👍\n- 매우매우 성실하고 꾸준히 무언가를 해내는, 모범생의 표본\n- *주의사항 : 게임에서 만큼은 좀 쉽시다….!");
reuslt_info_text[9] = new String("- 게임에서도 뒤에서 조용히 친구들에게 도움을 주며 뿌듯함을 느껴요!\n- 생존 게임에서 요리를, 팀 게임에서 서폿이나 힐러를 담당하는 편! \n- 착하고 배려하는 친근한 사람\n- *주의사항 : 게임이니까 내 마음대로 안 되더라도 너무 속상해하지마요~");
reuslt_info_text[10] = new String("- 퀘스트나 임무를 성공적으로 완료했을때 뿌듯함!\n- 다른 사람들을 관리하거나 신경쓰는 멀티플레이 게임이나 타이쿤 게임을 좋아함\n- 게임도 현생도 완벽하게, 똑 부러지는 사장님!\n- *주의사항 : 때로는 결과보다는 그 과정을 즐겨보세요! 그것도 게임의 묘미니까요😌");
reuslt_info_text[11] = new String("미완");
reuslt_info_text[12] = new String("- 어떤 게임에서 ‘내가 잘하면’ 재밌음!\n- 친구들과 함께 즐기더라도 가만히 앉아서 버스 타기보다는 내가 어떤 부분에서 잘해서 빛나고 싶음. 한 판 졌어도 나만 잘했으면 돼!\n- 자기가 좋아하는 게임이라면 피드백을 받거나 공부하면서까지 실력을 키우고, 랭킹이 올라가면 뿌듯함\n- *주의사항 : 게임 잘 못하는 친구가 있어도 너무 스트레스 받지 말아요~");
reuslt_info_text[13] = new String("- 아름다운 브금, 감각적인 그래픽에 매료되는 편!\n- 미적인 연출이 좋은 리듬 게임이나 로그라이크 게임을 좋아함!\n- 귀차니즘이 강해 하루 24시간 중 침대에 있는 시간이 가장 많음\n- *주의사항 : 모니터나 휴대폰 보다가 약속 늦지 마세요!");
reuslt_info_text[14] = new String("- 큰 스케일, 가슴이 뻥 뚫리는 액션, 어디로 튈지 모르는 모험 같은 게임 너무 좋아!\n- GxA 같은 게임에서 크게 한 탕 벌이고 도망가는 스릴과 짜릿함을 좋아함\n- 대체로 친구들과 쉽게, 그러나 한바탕 제대로 즐길 수 있는 게임이 취향\n- *주의사항 : 도박 그만하고 주변에서 걱정해주면 좀 들으세요!");
reuslt_info_text[15] = new String("- #게임은 거둘뿐…\n- 게임 자체가 즐겁기보단, 사람들과 어울리기 위한 수단으로 게임을 함\n- 그래서 간단한 협동 게임 혹은 현실의 보드 게임을 즐기는 편\n- 자유로운 영혼의 인싸, 인맥도 넓고 자기 사람 잘 챙김\n- *주의사항 : 입방정 조심! 당신을 거치면 비밀 이야기가 공지사항이 되어버렷….");






