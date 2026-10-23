// ✏️ 여기만 수정하면 됩니다. (샘플 데이터)
// 각 항목의 en: 영어 번역. 없으면 한국어가 그대로 표시됩니다.
const WEDDING = {
  groom: "채수민",
  bride: "한승원",
  date: "2026년 10월 31일 토요일 오후 5시",
  place: "노블발렌티 삼성",
  greeting: "저희의 새로운 시작을 함께해 주셔서 감사합니다.",
  en: {
    groom: "SooMin Chae",
    bride: "Iris Han",
    date: "Saturday, October 31, 2026 at 5:00 PM",
    place: "Noble Valenti Samsung",
    greeting: "Thank you for joining us at the beginning of our new journey.",
  },
};

// title: 식순 이름 / person: 담당자 / note: 부연 설명(선택, 없으면 "")
const PROGRAM = [
  { title: "오프닝 영상", person: "", note: "", en: { title: "Opening Video" } },
  { title: "개식사", person: "사회자", note: "", en: { title: "Opening Remarks", person: "Master of Ceremonies" } },
  { title: "신랑 부모님 입장", person: "", note: "", en: { title: "Entrance of the Groom's Parents" } },
  { title: "신부 부모님 입장", person: "", note: "", en: { title: "Entrance of the Bride's Parents" } },
  { title: "화촉 점화", person: "양가 부모님", note: "", en: { title: "Candle Lighting", person: "Both Families' Parents" } },
  { title: "신랑 입장", person: "신랑 채수민", note: "", en: { title: "Groom March", person: "Groom Soomin Chae" } },
  { title: "신부 입장", person: "신부 한승원", note: "", en: { title: "Bride March", person: "Bride Seungwon Han" } },
  { title: "기도", person: "김대성 목사님", note: "", en: { title: "Prayer", person: "Rev. Daesung Kim" } },
  {
    title: "성경 봉독",
    person: "김대성 목사님",
    note: "",
    // verse: 성경 말씀(선택). ref는 맨 위에 표시, verses는 절 번호(n)와 본문(text). 없으면 verse 항목 전체를 지우세요.
    verse: {
      ref: "베드로전서 4장 8절 · 개역개정",
      verses: [
        { n: 8, text: "무엇보다도 뜨겁게 서로 사랑할지니 사랑은 허다한 죄를 덮느니라" },
      ],
    },
    en: {
      title: "Scripture Reading",
      person: "Rev. Daesung Kim",
      verse: {
        ref: "1 Peter 4:8 · NIV",
        verses: [
          { n: 8, text: "Above all, love each other deeply, because love covers over a multitude of sins." },
        ],
      },
    },
  },
  { title: "주례사", person: "김대성 목사님", note: "", en: { title: "Officiant's Address", person: "Rev. Daesung Kim" } },
  { title: "혼인 서약 및 성혼 선언", person: "김대성 목사님", note: "", en: { title: "Wedding Vows & Declaration of Marriage", person: "Rev. Daesung Kim" } },
  { title: "축도", person: "김대성 목사님", note: "", en: { title: "Benediction", person: "Rev. Daesung Kim" } },
  { title: "축사", person: "도지은", note: "", en: { title: "Congratulatory Speech", person: "Jieun Do" } },
  { title: "축가", person: "배지원", note: "", en: { title: "Celebration Song", person: "Jiwon Bae" } },
  { title: "양가 부모님께 인사", person: "신랑 · 신부", note: "", en: { title: "Bow to the Parents", person: "Groom · Bride" } },
  { title: "행진", person: "신랑 · 신부", note: "", en: { title: "Recessional", person: "Groom · Bride" } },
  { title: "기념 촬영", person: "", note: "가족 → 친구 순서로 진행됩니다", en: { title: "Group Photos", note: "Family first, then friends" } },
];
