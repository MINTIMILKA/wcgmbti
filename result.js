//텍스트 문자열
var test_question_text = new Array(12);
var test_select_text_1 = new Array(12);
var test_select_text_2 = new Array(12);

//결과 문자열 
var result_type_text = new Array(16);
var result_name_text = new Array(16);
var result_name_text_2 = new Array(16);
var reuslt_info_text = new Array(16);
var result_warn_text = new Array(16);

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
result_name_text[0] = new String("과몰입 빅 픽쳐 설계자");
result_name_text[1] = new String("고독한 ‘겜’믈리에");
result_name_text[2] = new String("이세계 안티 히어로");
result_name_text[3] = new String("유쾌한 병맛 트롤러");
result_name_text[4] = new String("외유내강 보안관");
result_name_text[5] = new String("너구리 마을 주민 대표");
result_name_text[6] = new String("정의로운 길드장");
result_name_text[7] = new String("키보드가 쉴 틈 없는 만인의 스타");
result_name_text[8] = new String("부끄럼쟁이 창고지기");
result_name_text[9] = new String("평점 만점 서포터 맛집");
result_name_text[10] = new String("엄근진 효율왕");
result_name_text[11] = new String("분위기메이커 인게임 선봉장");
result_name_text[12] = new String("독고다이 에이전트");
result_name_text[13] = new String("방구석 대학교 패디과");
result_name_text[14] = new String("유아독존 관종 ‘겜’블러’");
result_name_text[15] = new String("파티광 인플루언서");

//결과 이름_2
result_name_text_2[0] = new String("빅픽쳐 설계자");
result_name_text_2[1] = new String("겜믈리에");
result_name_text_2[2] = new String("안티 히어로");
result_name_text_2[3] = new String("병맛 트롤러");
result_name_text_2[4] = new String("외유내강 보안관");
result_name_text_2[5] = new String("너구리 마을 주민 대표");
result_name_text_2[6] = new String("정의로운 길드장");
result_name_text_2[7] = new String("만인의 스타");
result_name_text_2[8] = new String("부끄럼쟁이 창고지기");
result_name_text_2[9] = new String("서포터 맛집");
result_name_text_2[10] = new String("엄근진 효율왕");
result_name_text_2[11] = new String("인게임 선봉장");
result_name_text_2[12] = new String("독고다이 에이전트");
result_name_text_2[13] = new String("방구석 패디과");
result_name_text_2[14] = new String("관종 겜블러’");
result_name_text_2[15] = new String("파티광 인플루언서");

//결과 설명
reuslt_info_text[0] = new String("<div>- 힘을 숨긴 너드</div><div>- 한 번 꽂힌 게임은 깊게 파고든다</div><div>- 스토리의 완성도(고증, 개연성)와 연출 중시</div><div>- 다른 사람이 모르는 부분을 해결해줬을 때 희열을 느낌</div><div>- 게임을 분석하여, 게임 내에서 가장 효율적인 루트를 찾으려고 함</div><div>- 다른 사람들이 어려워서 포기하려는 미션도 끈기와 흥미를 가지고 해결하려고 노력하는 스타일</div><div>- 용의주도한 전략가, 여러 사람들과 하는 미션, 퀘스트에서 전략을 짜고, 뒤에서 지시하는 역할</div><div>- 인게임 채팅에서도 맞춤법 귀신");
reuslt_info_text[1] = new String("<div>- 굳이 여럿이서 해야 되나? 나 혼자서도 잘하는데?</div><div>- 게임 속 세계를 탐구하고, 숨겨진 이스터에그를 음미하는 게이머</div><div>- 마스터 해버린 게임에는 더 이상 흥미제로, 내가 모르는 또 다른 세계를 탐험하러 떠나는 여행자</div><div>- 진지해 보이지만 은근히 똘기 많음, 다른 사람들은 생각하지 못한 루트를 찾아내는 독특한 발상!</div><div>- 빠른 시간 안에 행동해야 하는 타임 어택 게임은 안 맞음</div><div>- 스토리의 완성도(고증, 개연성)와 연출 중시</div><div>- 매일매일 해야 하는 일일 퀘스트 싫어함!</div><div>- 파티 퀘스트에서 조용히 자기 할 일 하다가, 막히는 순간 번뜩이는 아이디어와 함께 스테이지를 클리어하는 숨은 조력자");
reuslt_info_text[2] = new String("<div>- 아무리 게임을 추천해줘도 자기 마음에 안 들면 듣는 시늉도 안함</div><div>- 남에게는 차갑지만 자기 사람한테는 따뜻함</div><div>- 친구들이랑 같이 할 때 내가 항상 앞서 있어야 함</div><div>- 정해진 루트가 있어도 내가 납득이 안 되면 다른 길부터 가봄</div><div>- 게임을 즐긴다고? 게임은 매순간 전쟁이야</div><div>- 게임은 잘해야 재밌지! 졌.잘.싸는 용납이 안됨! </div><div>- ‘내가 잘해서 이길 때’ 희열을 느끼는 게임 속 영웅! 혹은 빌런?</div><div>- 팀 게임이 지겨워지면 힐링게임으로 셀프 유배를 떠남");
reuslt_info_text[3] = new String("<div>- 논란의 여지가 있는 게임이어도 재밌어 보이면 일단 해봄</div><div>- 누가 시비 걸면 끝까지 쫓아가서 혼내줌</div><div>- 게임을 시작해도 금방 싫증이 나서 다른 게임으로 갈아탐</div><div>- 짓궂은 장난꾼, ‘안되는게 어디있어? 일단 해보자’</div><div>- 승부욕은 나의 힘! 승리는 언제나 짜릿해!</div><div>- 일부로 트롤짓 하면서 친구들 괴롭히는 데에서 희열을 느낌</div><div>- 남이 하자는 건 안하고, 내가 하자고 한 건 꼭 해야함!</div><div>- 평범하고 잔잔한 스토리는 별로… 새롭고 짜릿한 게 좋아…⭐️</div><div>- 이상해 보이는데 실제로도 이상함");
reuslt_info_text[4] = new String("<div>- 미스터리한 분위기의 게임에 몰입 잘함</div><div>- 열린 결말 좋아함</div><div>- 양심적인 플레이를 고집하는 고집쟁이, 치트키는 남의 이야기</div><div>- 고민거리를 던져주는, 영화 같은 스토리의 게임에 몰입함</div><div>- 하나의 상황도 다각도로 분석하여 해결방법을 찾는 통찰력을 가지고 있음</div><div>- 이분법적이지 않은 복잡한 감정선과 전개 방식에 매력을 느낌</div><div>- 반복적인 스테이지는 빨리 질려버리는 편</div><div>- 경쟁은 피하고 싶지만, 도움은 주고 싶어!");
reuslt_info_text[5] = new String("<div>- 인류애가 넘치는 프로힐링러/n- 동x의 숲, 스x듀밸리 같이 평화롭고 아기자기한 게임이 최고로 좋아!</div><div>- 잔잔한 감동, 또는 귀엽고 소소한 스토리에 잘 빠져듬</div><div>- 게임 속 인물에게 감정이입 잘하는 편!</div><div>- 사람을 좋아하긴 하지만 적당히 거리 두며 혼자 집에 있기 좋아하는 성격</div><div>- 경쟁보다는 평화로운 소통을 할 수 있는 타입</div><div>- 협동을 좋아하고 충돌은 피하는 편</div><div>- 게임에서 재화를 얻기 보다는 그 과정 자체를 즐김!");
reuslt_info_text[6] = new String("<div>- 팀원들을 아우르는 부드러운 리더, 열정과 의욕으로 팀원을 이끌어가는 플레이어!</div><div>- 사람들을 관찰하고 옳은 길로 이끄는 스토리의 게임을 좋아함</div><div>- 온라인 게임에서는 이미 정의롭고 듬직한 클랜장으로 활동중</div><div>- 사람을 좋아하고 속이 깊고 강한 사람</div><div>- 마음에 안 드는 부분이 있어도 팀원한테 싫은 소리 잘 못 함</div><div>- 게임 정모가 있으면 빠지지 않고 꼭 참여하는 편</div><div>- 다른 사람들의 의견을 많이 의식하는 편</div><div>- 팀원들을 위해서 소매 걷어 올리고 나설 준비 완료!");
reuslt_info_text[7] = new String("<div>- 호기심 많은 탐험가 </div><div>- 싸움 싫어! 내가 아니더라도 파티원끼리 싸움 날 거 같은 분위기면 심장부터 떨려..</div><div>- 게임 자체가 재밌기보다, 함께 즐기는 사람들과 그 분위기가 좋아서~🤗</div><div>- 즉흥적이고 마음대로 할 수 있는 자유도 높은 게임이 좋아! 새로운 미션과 퀘스트가 좋아!</div><div>- 마음에 드는 아이템은 꼭 산다! 경제 개념 없는 편</div><div>- 경쟁 의식? 굳이! 같이 재밌으면 됐지!</div><div>- 많은 시간이 필요한 퀘스트는 중간에 포기하게 됨</div><div>- 캐릭터 꾸미는데 시간을 많이 쓰는 편, 개성있는 커스터마이징 장인!");
reuslt_info_text[8] = new String("<div>- 낯가림 심한 편! 친해지려면 오래 걸림</div><div>- 원리원칙을 지켜서 플레이하는 편! 빽도어, 치트 같은 것 별로…</div><div>- 배경화면 아이콘부터 게임 인벤토리까지 다 정리되어 있음!</div><div>- 게임을 하기 전에 첫인상이 별로면 시작도 안 함</div><div>- 특유의 성실함을 주체하지 못하고 장시간 플레이하는 전략 게임이나 크래프팅 게임 좋아함</div><div>- 작은 것들을 차곡차곡 모아 원하는 결과를 만들어낼 때의 그 뿌듯함과 성취감👍</div><div>- 사소한 미션도 지나치지 않는 꼼꼼한 성격</div><div>- 매우매우 성실하고 꾸준히 무언가를 해내는, 모범생의 표본");
reuslt_info_text[9] = new String("<div>- 잘 챙겨주는 부모님</div><div>- 먼저 다가가진 않지만, 자기 사람은 잘 챙김!</div><div>- 게임을 하다가 칭찬 받았을 때, 티는 안 내지만 속으로는 완전 좋아함</div><div>- 혼자 집중해서 플레이하고 있는데 계속 귓속말 오면 짜증남</div><div>- 게임에 현질을 많이 안 하는 편!</div><div>- 뚜렷한 목적을 위해 시간 투자를 많이 함</div><div>- 게임에서도 뒤에서 조용히 친구들에게 도움을 주며 뿌듯함을 느낌!</div><div>- 생존 게임에서 요리를, 팀 게임에서 서폿이나 힐러/탱커를 담당하는 편! </div><div>- 착하고 배려하는 친근한 사람");
reuslt_info_text[10] = new String("<div>- 관리자st</div><div>- 다른 사람 생각보다 내 판단이 먼저!</div><div>- 파티 퀘스트나 길드를 ‘효율적으로’ 잘 이끌 수 있음</div><div>- 깐깐해보이지만 의외로 피드백은 잘 수용함</div><div>- 퀘스트나 임무를 성공적으로 완료했을때 뿌듯함!</div><div>- 내가 플레이한 성과가 바로 보이는 RPG 게임, 혹은 랭킹 시스템이 있어 내 실력을 보면서 동기부여가 되는 경쟁 게임(리x오브레전드)을 좋아함!</div><div>- 게임도 현생도 완벽하게, 똑 부러지는 사장님 느낌!");
reuslt_info_text[11] = new String("<div>- 빠이팅 넘치는 형언니</div><div>- 뉴비들에게 먼저 말 걸어서 도움을 주고 싶어함!</div><div>- 나 혼자 튀는 것보다 다 같이 어울릴 수 있는 분위기를 선호하는 편</div><div>- 머리 써야하는 복잡한 게임 별로…. 완성도가 높아서 몰입감 있는 게임이 좋음!</div><div>- 친구랑 하면 재미가 두 배! 카x라이더, 닌x도 wii 같은 협동 게임 좋아함!</div><div>- 내가 리드할게 따라와~ 현실에서도 주선하는 인싸 성격");
reuslt_info_text[12] = new String("<div>- 어떤 게임에서 ‘내가 잘하면’ 재밌음!</div><div>- 친구들과 함께 즐기더라도 가만히 앉아서 버스 타기보다는 내가 어떤 부분에서 잘해서 빛나고 싶음. 한 판 졌어도 나만 잘했으면 돼!</div><div>- 자기가 좋아하는 게임이라면 피드백을 받거나 공부하면서까지 실력을 키우고, 랭킹이 올라가면 뿌듯함</div><div>- 평소에는 조용하나, 게임 내 팀원들이 자신을 필요로 할 경우 빨리 달려감</div><div>- 하나의 콘텐츠에 꽂히면 그것만 계속 함</div><div>- 타인의 캐릭터를 신경쓰기 보다는 내 캐릭터가 먼저인 경우가 많음</div><div>- 레이드를 하더라도 모험과 스릴을 즐겨 무모한 플레이를 하기도 함</div><div>- 노가다를 하더라도 자신의 노력을 최대한 아끼면서 극한의 이득을 보려함");
reuslt_info_text[13] = new String("<div>- 아름다운 브금, 감각적인 그래픽에 매료되는 편!</div><div>- 미적인 연출이 좋은 리듬 게임이나 로그라이크 게임을 좋아함!</div><div>- 귀차니즘이 강해 하루 24시간 중 침대에 있는 시간이 가장 많음</div><div>- 직접 팀을 지휘하는 것보다는 자유로운 플레이를 추구함</div><div>- 게임 내에서 의견 충돌을 피하면서, 중립을 지키려 노력함</div><div>- 보스를 잡더라도 실천하기 위한 추진력이 부족하기도 함</div><div>- 매주 해야 하는 퀘스트를 미루고 미루다가 마지막 날에 몰아서 함</div><div>- 게임에서 음악과 캐릭터 코디에 관심이 많음</div><div>- 무언가 하고자 하는 것에 열정적으로 임함");
reuslt_info_text[14] = new String("<div>- 채팅 칠 때 유머러스하고 재치 있는 편</div><div>- 길드나 파티에서 자신의 역할을 빨리 찾아가는 편!</div><div>- 큰 스케일, 가슴이 뻥 뚫리는 액션, 어디로 튈지 모르는 모험 같은 게임 너무 좋아!</div><div>- GxA 같은 게임에서 크게 한 탕 벌이고 도망가는 스릴과 짜릿함을 좋아함</div><div>- 대체로 친구들과 쉽게, 그러나 한바탕 제대로 즐길 수 있는 게임이 취향</div><div>- 자신이 중심이 되는 플레이를 좋아함. </div><div>- 게임 공략보다는 직접 부딪히면서 배우는 경향이 강함.</div><div>- 게임에서도 미래보다는 현재에 집중하여 투자하는 편");
reuslt_info_text[15] = new String("<div>- 게임 자체가 즐겁기보단, 사람들과 어울리기 위한 수단으로 게임을 함</div><div>- 그래서 간단한 협동 게임 혹은 현실의 보드 게임을 즐기는 편</div><div>- 자유로운 영혼의 인싸, 인맥도 넓고 자기 사람 잘 챙김</div><div>- 게임 내에서도 사교적이며 모르는 유저에게도 친절하게 대해줌</div><div>- 유저들이 많이 있는 곳에서도 특유의 센스와 유머로 다른 유저와 친해짐</div><div>- 뭐든지 즐겁게 하려고 하며, 게임 내에서도 규율을 지키는 것 보다는 자유로운 생활을 선호함</div><div>- 게임 컨텐츠를 즐길 때 충동적 선택해서 하며 무계획으로하는 경우가 많음</div><div>- 과도하게 정이 많아 게임 내에서도 다 들어주려함");

result_warn_text[0] = new String("게임에 몰입하는 것도 좋지만, 밖에 나가서 친구들을 만나는 시간도 가지세요!");
result_warn_text[1] = new String("나한테만 재밌는 게임일 수 있으니, 친구에게 게임을 소개할 때는 적당히!!!");
result_warn_text[2] = new String("파티 퀘스트 진행 시, 답답함을 느껴도 팀원들에게 막말하지 마세요!");
result_warn_text[3] = new String("나만 재밌는 장난일 수 있으니, 눈치는 좀 챙깁시다!");
result_warn_text[4] = new String("게임에 몰입하는 것도 좋지만, 지치지 않게 조심하세요!");
result_warn_text[5] = new String("자신과 맞지않는 캐릭터라도 배척하지는 마세요!");
result_warn_text[6] = new String("때로는 나와 너무 다른 사람이 있을 수 있어요. 그럴 땐 그냥 보내주는 것도 방법이랍니다!");
result_warn_text[7] = new String("사람을 너무 믿지 마세요! 상처 받으면 슬프니까");
result_warn_text[8] = new String("게임에서 만큼은 좀 쉽시다….!");
result_warn_text[9] = new String("게임이니까 내 마음대로 안 되더라도 너무 속상해하지마요~");
result_warn_text[10] = new String("때로는 결과보다는 그 과정을 즐겨보세요! 그것도 게임의 묘미니까요😌");
result_warn_text[11] = new String("게임은 게임일 뿐이니까 내 마음대로 안 되더라도 너무 속상해하지마요~");
result_warn_text[12] = new String("자신의 플레이만 고집하기 보다는 다른 스타일도 받아 들일 필요가 있어요!");
result_warn_text[13] = new String("현실에서나 게임에서나 조금만 더 부지런해집시다….!");
result_warn_text[14] = new String("팀을 위해서라도 무모한 시도는 좀 줄입시다!");
result_warn_text[15] = new String("덜렁대다가 실수하는 것만 좀 조심합시다!");


//결과 구하기 
for(var i=result_address.indexOf("type")+"type".length+1;i<result_address.length;i++)
{
    type_num = type_num + result_address[i];
}

//결과 윈도우 출력
switch(parseInt(parseInt(type_num)/4))
{
  case 0:
    if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
    {
        document.querySelector("#home_content").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items: center; width:31em; height:81em; min-height:81em; background-image:url(../4_result/1/3.png); background-size:100% 100%; background-repeat:no-repeat;");
    }
    if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
    {
        document.querySelector("#home_content").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items: center; width:90%; height:142em; min-height:142em; background-image:url(../4_result/1/3.png); background-size:100% 100%; background-repeat:no-repeat;");
    }
    break;
  case 1:
    if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
    {
        document.querySelector("#home_content").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items: center; width:31em; height:81em; min-height:81em; background-image:url(../4_result/2/3.png); background-size:100% 100%; background-repeat:no-repeat;");
    }
    if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
    {
        document.querySelector("#home_content").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items: center; width:90%; height:142em; min-height:142em; background-image:url(../4_result/2/3.png); background-size:100% 100%; background-repeat:no-repeat;");
    }
    break;
  case 2:
    if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
    {
        document.querySelector("#home_content").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items: center; width:31em; height:81em; min-height:81em; background-image:url(../4_result/3/3.png); background-size:100% 100%; background-repeat:no-repeat;");
    }
    if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
    {
        document.querySelector("#home_content").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items: center; width:90%; height:142em; min-height:142em; background-image:url(../4_result/3/3.png); background-size:100% 100%; background-repeat:no-repeat;");
    }
    break;
  case 3:
    if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
    {
        document.querySelector("#home_content").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items: center; width:31em; height:81em; min-height:81em; background-image:url(../4_result/4/3.png); background-size:100% 100%; background-repeat:no-repeat;");
    }
    if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
    {
        document.querySelector("#home_content").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items: center; width:90%; height:142em; min-height:142em; background-image:url(../4_result/4/3.png); background-size:100% 100%; background-repeat:no-repeat;");
    }
    break;
}

//결과 출력
document.querySelector(".result .text").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:80%; height:14%; background:url(../4_result/8/" + (parseInt(type_num)%16 + 1) + ".png); background-size:contain; background-repeat:no-repeat; background-position:center;");

//결과 이미지 넣기
document.querySelector("#home_content .result .img").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items: center; width:70%; height:20%; background:url(../4_result/" + (parseInt((parseInt(type_num)%16)/4) + 1) + "/" + ((parseInt(type_num)%4) + 5) + ".png); background-size:contain; background-repeat:no-repeat; background-position:center;");
//결과 설명 화면 
document.querySelector("#home_content .result .info_window .text").innerHTML = reuslt_info_text[parseInt(type_num)%16];

//결과 출력 
//document.querySelector(".result > .text").innerText = result_type_text[parseInt(type_num)%16];
//document.querySelector(".result > .name").innerText = result_name_text[parseInt(type_num)%16];

//주의사항 출력
document.querySelector("#home_content .result .warn_window .text_div .text").innerText = result_warn_text[parseInt(type_num)%16];

//주의사항 사진 출력
var var_img_1 = 0, var_img_2 = 0, var_text_1 = 0, var_text_2 = 0;

switch(parseInt(type_num)%16)
{
  case 0:
    var_img_1 = 6;
    var_img_2 = 16;
    var_text_1 = 2;
    var_text_2 = 11;
    break;
  case 1:
    var_img_1 = 2;
    var_img_2 = 13;
    var_text_1 = 3;
    var_text_2 = 15;
    break;
  case 2:
    var_img_1 = 11;
    var_img_2 = 4;
    var_text_1 = 0;
    var_text_2 = 9;
    break;
  case 3:
    var_img_1 = 14;
    var_img_2 = 7;
    var_text_1 = 1;
    var_text_2 = 13;
    break;
  case 4:
    var_img_1 = 3;
    var_img_2 = 9;
    var_text_1 = 6;
    var_text_2 = 10;
    break;
  case 5:
    var_img_1 = 5;
    var_img_2 = 1;
    var_text_1 = 7;
    var_text_2 = 14;
    break;
  case 6:
    var_img_1 = 10;
    var_img_2 = 15;
    var_text_1 = 4;
    var_text_2 = 8;
    break;
  case 7:
    var_img_1 = 12;
    var_img_2 = 8;
    var_text_1 = 5;
    var_text_2 = 12;
    break;
  case 8:
    var_img_1 = 9;
    var_img_2 = 3;
    var_text_1 = 10;
    var_text_2 = 6;
    break;
  case 9:
    var_img_1 = 16;
    var_img_2 = 6;
    var_text_1 = 11;
    var_text_2 = 2;
    break;
  case 10:
    var_img_1 = 15;
    var_img_2 = 10;
    var_text_1 = 8;
    var_text_2 = 4;
    break;
  case 11:
    var_img_1 = 4;
    var_img_2 = 11;
    var_text_1 = 9;
    var_text_2 = 0;
    break;
  case 12:
    var_img_1 = 1;
    var_img_2 = 5;
    var_text_1 = 14;
    var_text_2 = 7;
    break;
  case 13:
    var_img_1 = 13;
    var_img_2 = 2;
    var_text_1 = 15;
    var_text_2 = 3;
    break;
  case 14:
    var_img_1 = 8;
    var_img_2 = 12;
    var_text_1 = 12;
    var_text_2 = 5;
    break;
  case 15:
    var_img_1 = 7;
    var_img_2 = 14;
    var_text_1 = 13;
    var_text_2 = 1;
    break;
}

if(parseInt(var_img_1) == 16)
{
  document.querySelector("#home_content .result .warn_window .chemi_img .img_1 .img").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%; height:75%; background:url(../4_result/6/" + parseInt(var_img_1) + ".png); background-size:contain; background-repeat:no-repeat; background-position-x:0%; background-position-y:0%;");
}
else
{
  document.querySelector("#home_content .result .warn_window .chemi_img .img_1 .img").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%; height:75%; background:url(../4_result/6/" + parseInt(var_img_1) +".png); background-size:contain; background-repeat:no-repeat; background-position:center;");
}

document.querySelector("#home_content .result .warn_window .chemi_img .img_1 .text").innerText = result_name_text_2[parseInt(var_text_1)];

if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
{
  document.querySelector("#home_content .result .warn_window .chemi_img .img_1 .text").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; font-family: 'home_font'; font-size:1.1rem; width:75%; height:75%;align-items:center; width:100%; height:25%;");
}
if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
{
  document.querySelector("#home_content .result .warn_window .chemi_img .img_1 .text").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; font-family: 'home_font'; font-size:1.5rem; width:75%; height:75%;align-items:center; width:100%; height:25%;");
}

if(parseInt(var_img_2) == 16)
{
  document.querySelector("#home_content .result .warn_window .chemi_img .img_2 .img").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%; height:75%; background:url(../4_result/6/" + parseInt(var_img_2) + ".png); background-size:contain; background-repeat:no-repeat; background-position-x:0%; background-position-y:0%;");
}
else
{
  document.querySelector("#home_content .result .warn_window .chemi_img .img_2 .img").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%; height:75%; background:url(../4_result/6/" + parseInt(var_img_2) +".png); background-size:contain; background-repeat:no-repeat; background-position:center;");
}

document.querySelector("#home_content .result .warn_window .chemi_img .img_2 .text").innerText = result_name_text_2[parseInt(var_text_2)];

if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
{
  document.querySelector("#home_content .result .warn_window .chemi_img .img_2 .text").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; font-family: 'home_font'; font-size:1.1rem; width:75%; height:75%;align-items:center; width:100%; height:25%;");
}
if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
{
  document.querySelector("#home_content .result .warn_window .chemi_img .img_2 .text").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; font-family: 'home_font'; font-size:1.5rem; width:75%; height:75%;align-items:center; width:100%; height:25%;");
}

//해시태그 이벤트 설명 텍스트 출력 
document.querySelector("#event_window .result .text_1").innerText = "나의 겜BTI 유형 공유하고,\n 현생에서 \'기프티콘\' 득템하자!";

//유의사항 텍스트
document.querySelector("#event_window .result .text_5").innerHTML = "<div>- 당첨자는 WCG 공식 인스타그램 DM으로 개별 발표 예정입니다.</div><div>- 비공개 계정은 당첨에서 제외될 수 있으니 확인해주세요.</div><div>- 당첨자 발표일 기준 WCG 공식 계정을 팔로우 하지 않았을 경우, 당첨에서 제외될 수 있습니다.<div>"

//텍스트 복사
function copy_text()
{
    var temp_copy_text = document.createElement("textarea");
    document.body.appendChild(temp_copy_text);
    temp_copy_text.value = "#겜BTI #게임성향테스트 #나는_어떤_게이머인지_알아보자 #WCG2022";
    temp_copy_text.select();
    document.execCommand('copy');
    document.body.removeChild(temp_copy_text);

    window.alert("해시태그를 복사했습니다")
}

//테스트 다시 시작
function test_restart()
{
    if(matchMedia("all and (min-width:501px)").matches || matchMedia("all and (min-device-width:501px)").matches)
    {
        document.querySelector("html").setAttribute("style", "display:flex; flex-direction:column; align-items:center; width:100vw; min-width:36rem; height:100vh; min-height:900px; margin:0;");
    }
    if(matchMedia("all and (max-device-width:500px)").matches || matchMedia("all and (max-width:500px)").matches)
    {
        document.querySelector("html").setAttribute("style", "display:flex; flex-direction:column; align-items:center; width:100vw; height:100vh; min-height:600px; margin:0;");
    }

    document.querySelector("#body_middle").setAttribute("style", "display:flex; flex-direction:column; justify-content:start; align-items:center; flex:1; width:100%; height:40%; background-color:rgb(0, 128, 128);");
    
    document.querySelector("#main_space_1").setAttribute("style", "display:none");
    
    document.querySelector("#home_content").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%; height:100%; min-height:0%; background-image:none;");
    
    document.querySelector("#main_space_2").setAttribute("style", "display:none");
    
    document.querySelector("#event_window").setAttribute("style", "display:none");
    
    document.querySelector("#main_space_3").setAttribute("style", "display:none");
    
    document.querySelector("#body_bottom_space").setAttribute("style", "display:none");
    document.querySelector("#home_button").setAttribute("style", "display:none");

    //모든 결과 관련 태그 제거 
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

//카카오 공유 번호 미리 등록
Kakao.init('276e719d8448d0a0ea5ce688a4023792');

//공유 기능
function test_share()
{
    Kakao.Link.sendCustom
    (
      {
        templateId:68513
      }
    );
}

function loading(next_function)
{
    function loading_on()
    {
        document.querySelector(".loading").setAttribute("style", "display:''");

        //로딩 페이지 생성
        document.querySelector("#home_content").setAttribute("style", "display:flex; flex-direction:column; justify-content:center; align-items:center; width:80%; height:100%; min-height:0%; background-image:url(../2_loading/2.png); background-size: contain; background-repeat:no-repeat; background-position:center;");
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





