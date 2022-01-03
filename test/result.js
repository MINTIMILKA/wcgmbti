//텍스트 문자열
var test_question_text = new Array(12);
var test_select_text_1 = new Array(12);
var test_select_text_2 = new Array(12);

//결과 문자열 
var result_type_text = new Array(16);
var result_name_text = new Array(16);
var reuslt_info_text = new Array(16);

//결과 페이지 주소 
var result_address = location.href;
//결과 변수 
var type_num = new String();

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

//결과 구하기 
for(var i=result_address.indexOf("type")+"type".length+1;i<result_address.length;i++)
{
    type_num = type_num + result_address[i];
}

console.log(parseInt(type_num));

//결과 출력 
document.querySelector(".result > .text > p").innerText = result_type_text[parseInt(type_num)];
document.querySelector(".result > .name > p").innerText = result_name_text[parseInt(type_num)];
document.querySelector(".result > .info > p").innerText = reuslt_info_text[parseInt(type_num)];

function test_restart()
{
    //모든 시작 관련 태그 제거 
    var start_class_length = document.querySelectorAll(".result").length;

    for(var i=0;i<start_class_length;i++)
    {
        document.querySelectorAll(".result")[i].setAttribute("style", "display:none");
    }

    loading(go_home);

    function go_home()
    {
        location.replace("../home.html")
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





