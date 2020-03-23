function popup() {

    var name = $("#orderName").val();
    if (name == "") {
        alert("주문자 이름을 입력하세요.");
        $("#orderName").focus();
        return;
    }

    var count = $("#orderCount").val();
    if (count == "--수량을 선택하세요--") {
        alert("수량을 선택하세요.");
        $("#orderCount").focus();
        return;
    }

    var address = $("#orderAddress").val();
    if (address == "") {
        alert("주소를 입력하세요.");
        $("#orderAddress").focus();
        return;
    }

    var phonenumber = $("#phoneNum").val();
    if (phonenumber == "") {
        alert("전화번호를 입력하세요.");
        $("#phoneNum").focus();
        return;
    }

    function isCellPhone(p) {
        var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})[-][0-9]{3,4}[-][0-9]{4}$/;
        return regExp.test(p);
    }

    if (!isCellPhone(phonenumber)) {
        alert("휴대폰번호 입력형식이 틀립니다. 010-0000-0000으로 입력해주세요.");
        $("#phoneNum").focus();
        return;
    }

    alert("주문완료!");
}