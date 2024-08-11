# 식품 할인 판매 서비스

## 2024.07.03 - 2024.07.31

## 고려사항

> 짧은 로딩 시간으로 사용자 경험 향상. 유지보수가 편리한 코드 작성

> 프로젝트 기간 후 aws 서버 비용 문제로 aws 계정 해지. 프론트엔드 프로젝트만 분리해서 firebase로 재배포

## 사용 언어

`React` `Javascript` `HTML` `CSS`

## 사용 도구

`Figma` `Jira` `Slack` `Github` `Firebase`

## 기능소개

[요구사항명세서](https://docs.google.com/spreadsheets/d/12HDh-J5e2HBW2OwzMB3k8ohW8ONsa6bBMtyKRkdrIZA/edit?usp=sharing)

[화면설계](https://www.figma.com/design/QwVnCaheYzUERUBlr4Kmwe/%ED%99%94%EB%A9%B4%EC%84%A4%EA%B3%84?node-id=0-1&t=5T1C9i6Mf4rlxGdQ-1)

### 재고 식품 예약

<details>
<summary>화면 이미지</summary>
  
<img src="readme-img/재고%20구매.png" width="250px">
</details>

```
수량 설정
+, - 버튼을 눌러 예약할 수량을 예약 가게별로 설정한 재고 식품 금액만큼 주문금액이 증가/감소

결제 버튼
버튼을 누르면 서버로 주문금액과 가게이름, '재고식품예약' 태그 전송.
```

### 좌석 예약

<details>
<summary>날짜 선택 화면 이미지</summary>
  
<img src="readme-img/날짜 입력.png" width="250px">
</details>

```
가게 정보 페이지에서 예약하기 버튼을 누르면 표시되는 페이지

예약날짜 선택
가게에서 설정한 휴무일을 제외한 날짜 중 선택

예약시간 선택
가게에서 설정한 휴식 시간을 제외한 시간 중 선택
```

<details>
<summary>이용 정보 입력 화면 이미지</summary>
  
<img src="readme-img/메뉴 선택.png" width="250px">
</details>

```
이용시간 입력
+, - 버튼을 눌러 시간 설정
시간은 가게 별로 설정한 단위시간만큼 감소 단위시간당 일정금액만큼 할인금액이 증가

메뉴 정보 입력
가게에서 수량을 한 개 이상 등록한 메뉴 표시 +, - 버튼을 눌러 등록한 수량 이하로 메뉴 추가

총 금액
메뉴 합계 금액에서 이용시간 감소분만큼 할인된 금액 표시

예약하기 버튼
예약 내역 확인 페이지로 이동
```

<details>

<summary>예약내역 확인 화면 이미지</summary>
<img src="readme-img/예약 영수증.png" width="250px">
</details>

```
예약 내역
이전 페이지에서 입력한 정보 표시

예약하기 버튼
내역에 있는 모든 내용 서버로 전송
```
