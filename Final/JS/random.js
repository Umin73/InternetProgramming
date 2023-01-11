function recommend(){
  var selected = document.getElementById("select_value");
  var message = document.getElementById("msg");
  var type = selected.options[selected.selectedIndex].value;

  var random = Math.floor(Math.random() * 5);

  switch(type){
    case "한식":
      var korean = ['제나키친', '아라부대찌개', '남매부대찌개', '송송식탁', '밥은화'];
      message.innerHTML = "오늘은 " + korean[random] + "에서 먹는것을 추천드려요!";
      break;
    case "중식":
      var chinese = ['북경루', '조가연마라탕', '춘리마라탕', '라화쿵부', '신연마라탕'];
      message.innerHTML = "오늘은 " + chinese[random] + "에서 먹는것을 추천드려요!";
      break;
    case "일식":
      var japanese = ['스시현', '미소야', '토라카츠', '백소정', '스시빈'];
      message.innerHTML = "오늘은 " + japanese[random] + "에서 먹는것을 추천드려요!";
      break;
    case "양식":
      var western = ['화덕과베토벤', '스페셜리', '조아버거', '피클', '빌라드코스테스'];
      message.innerHTML = "오늘은 " + western[random] + "에서 먹는것을 추천드려요!";
      break;
    case "분식":
      var school = ['김만희분식', '오매떡', '고봉민김밥', '크앙분식', '사보르'];
      message.innerHTML = "오늘은 " + school[random] + "에서 먹는것을 추천드려요!";
      break;   
    case "고기":
      var meat = ['공복식당', '돈사랑우사랑', '곱분이곱창', '삼다옥1947', '청년고기장수'];
      message.innerHTML = "오늘은 " + meat[random] + "에서 먹는것을 추천드려요!";
      break;
    case "카페/디저트":
      var cafe = ['치코커피', '마놀린', '카페어바웃', '달봄제과', '카페샘'];
      message.innerHTML = "오늘은 " + cafe[random] + "에서 먹는것을 추천드려요!";
      break;
    case "기타":
      var etc = ['오빠생각타코', '누들아한타이', '샐러드프린세스', '지지고', '서브웨이'];
      message.innerHTML = "오늘은 " + etc[random] + "에서 먹는것을 추천드려요!";
      break;       
  }
}