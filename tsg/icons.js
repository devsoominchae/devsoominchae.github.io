// 아이콘 라이브러리 (관리자 화면의 아이콘 선택 목록과 공개 페이지가 함께 사용)
// hidden: true 는 선택 목록에는 안 나오지만, 이미 그 아이콘을 쓰는 품목은 그대로 표시하기 위해 남겨 둔 것
const ICONS = {
  pretie: { label: "프레타이, 알프레타이", d: '<path d="M2 12h20M6 5v14M18 5v14M3.5 9.5v5M20.5 9.5v5M9 10v4M15 10v4"/>' },
  wire: { label: "반선", d: '<ellipse cx="12" cy="7" rx="8" ry="3.5"/><path d="M4 7v10c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5V7M4 12c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5M12 10.5v-4M20 17l2 3"/>' },
  wood: { label: "목재", d: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="1.5"/>' },
  insulation: { label: "단열, 방수재", d: '<path d="M12 3c4 4 6 7 6 10a6 6 0 0 1-12 0c0-3 2-6 6-10z"/><path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5"/>' },
  pipe: { label: "배관", d: '<path d="M3 5h10a6 6 0 0 1 6 6v9M3 10h5a3 3 0 0 1 3 3v7M3 4v7M8 20h12"/>' },
  tool: { label: "공구, 부자재", d: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z"/>' },

  // 이전 아이콘 (목록에서는 숨김)
  rebar: { hidden: true, label: "철근·형강", d: '<path d="M4 7h16M4 12h16M4 17h16M7 4v16M17 4v16"/>' },
  cement: { hidden: true, label: "시멘트·레미콘", d: '<path d="M3 20h18M5 20V9l7-5 7 5v11M10 20v-6h4v6"/>' },
  brick: { hidden: true, label: "벽돌·블록", d: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16M12 4v16"/>' },
  window: { hidden: true, label: "창호·마감", d: '<path d="M3 21h18M6 21V8l6-4 6 4v13M9 12h6M9 16h6"/>' },
  layers: { hidden: true, label: "복합 자재", d: '<path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5"/>' },
};
