// ✏️ 여기만 수정하면 됩니다. (샘플 데이터)
const WEDDING = {
  groom: "채수민",
  bride: "한승원",
  date: "2026년 10월 31일 토요일 오후 5시",
  place: "노블발렌티 삼성",
  greeting: "저희의 새로운 시작을 함께해 주셔서 감사합니다.",
};

// title: 식순 이름 / person: 담당자 / note: 부연 설명(선택, 없으면 "")
const PROGRAM = [
  { title: "개회 선언", person: "사회자", note: "" },
  { title: "신랑 부모님 입장", person: "", note: "" },
  { title: "신부 부모님 입장", person: "", note: "" },
  { title: "화촉 점화", person: "양가 어머님", note: "" },
  { title: "신랑 입장", person: "신랑 채수민", note: "" },
  { title: "신부 입장", person: "신부 한승원", note: "" },
  { title: "혼인 서약 및 성혼 선언", person: "주례 · 김대성 목사님", note: "" },
  {
    title: "주례사",
    person: "주례 · 김대성 목사님",
    note: "",
    // verse: 성경 말씀(선택). ref는 맨 위에 표시, verses는 절 번호(n)와 본문(text). 없으면 verse 항목 전체를 지우세요.
    verse: {
      ref: "고린도전서 13장 4 - 7절 · 개역개정",
      verses: [
        { n: 4, text: "사랑은 오래 참고 사랑은 온유하며 시기하지 아니하며 사랑은 자랑하지 아니하며 교만하지 아니하며" },
        { n: 5, text: "무례히 행하지 아니하며 자기의 유익을 구하지 아니하며 성내지 아니하며 악한 것을 생각하지 아니하며" },
        { n: 6, text: "불의를 기뻐하지 아니하며 진리와 함께 기뻐하고" },
        { n: 7, text: "모든 것을 참으며 모든 것을 믿으며 모든 것을 바라며 모든 것을 견디느니라" },
      ],
    },
  },
  { title: "축가", person: "배지원", note: "" },
  { title: "축사", person: "도지은", note: "" },
  { title: "양가 부모님께 인사", person: "신랑 · 신부", note: "" },
  { title: "행진", person: "신랑 · 신부", note: "" },
  { title: "기념 촬영", person: "", note: "가족 → 친구 순서로 진행됩니다" },
];
