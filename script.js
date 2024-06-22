// 결과 문구를 서서히 나타나게 하는 함수
function showTextSlowly(text, delay) {
    let index = 0;
    const intervalId = setInterval(function() {
        document.getElementById('fortune-result').textContent += text[index];
        index++;
        if (index >= text.length) {
            clearInterval(intervalId);
        }
    }, delay);
}

// 포춘쿠키 버튼 클릭 이벤트 핸들러
document.getElementById('fortune-cookie-image').addEventListener('click', function() {
    // 이미지 크기 변경 애니메이션
    var image = this;
    var width = 300; // 초기 이미지 가로 크기
    var targetWidth = 150; // 최종 이미지 가로 크기
    var interval = setInterval(function() {
        // 이미지 크기를 천천히 감소시킴
        width -= 3; // 매번 1px씩 이미지 크기를 줄임
        if (width <= targetWidth) {
            clearInterval(interval);

            // 결과 문구를 표시하는 함수 호출
            showFortuneResult();
            return;
        }
        image.style.width = width + 'px';
    }, 3); // 10ms마다 이미지 크기를 감소시켜 천천히 작아지도록 함
    this.disabled = true;
});


function showFortuneResult() {
    // 포춘쿠키 문구 크롤링 및 표시하는 코드
    var fortunes = [
            "문제의 정답은 당신 마음속에 있습니다.",
            "당신의 행운은 어디에서나 당신을 따르고 있습니다.",
            "가만히 있으면 시간이 모든 것을 치유할 수 있습니다.",
            "노력은 배신하지 않습니다.",
            "침묵을 지키는 것이 옳을 때가 있습니다.",
            "한 발 더 내 딛는 것보다 당신의 마음을 추스르는 것이 필요할 때 입니다.",
            "모든 결과에는 원인이 있습니다. 주변의 관계를 돌아보세요.",
            "모르고 있었던 재능이 발현되는 날입니다. 새로운 일도 두려워마세요."
    ];
    var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    
    // 결과 문구를 서서히 나타나게 함 (100ms 간격으로 한 글자씩)
    showTextSlowly(randomFortune, 100);
    document.getElementById('fortune-result-container').classList.remove('hidden');
}