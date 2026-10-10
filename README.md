# AI SysPerf SIG

PyTorchKR "AI Systems Performance Engineering" 북 스터디의 발표 노트를 모은 사이트입니다.

- 사이트: <https://ai-sysperf-sig.liam.kim/>

## Schedule

매주 일요일에 모입니다. 일정은 `src/data/schedule.ts`에서 관리합니다.

### 시즌 1 · 킥오프와 인프라

| 회차 | 날짜 | 범위 |
| ---- | ---- | ---- |
| 1 | 2026-10-11 | Ch. 1–2 |
| 2 | 2026-10-18 | Ch. 3 |
| 3 | 2026-10-25 | Ch. 4 |
| 4 | 2026-11-01 | Ch. 5 |

### 시즌 2 · 추론과 자동 최적화

| 회차 | 날짜 | 범위 |
| ---- | ---- | ---- |
| 5 | 2026-11-08 | Ch. 16 전반 |
| 6 | 2026-11-15 | Ch. 16 후반 |
| 7 | 2026-11-22 | Ch. 15 |
| 8 | 2026-11-29 | Ch. 17 |
| 9 | 2026-12-06 | Ch. 18 |
| 10 | 2026-12-13 | Ch. 19 |
| 11 | 2026-12-20 | Ch. 20 |

휴식: 2026-12-27, 2027-01-03 (연말·연초)

### 시즌 3 · GPU·CUDA와 PyTorch

| 회차 | 날짜 | 범위 |
| ---- | ---- | ---- |
| 12 | 2027-01-10 | Ch. 6 |
| 13 | 2027-01-17 | Ch. 7 |
| 14 | 2027-01-24 | Ch. 8 |
| 15 | 2027-01-31 | Ch. 9 |
| 16 | 2027-02-14 | Ch. 10 |
| 17 | 2027-02-21 | Ch. 11 |
| 18 | 2027-02-28 | Ch. 12 |
| 19 | 2027-03-07 | Ch. 13 전반 |
| 20 | 2027-03-14 | Ch. 13 후반 |
| 21 | 2027-03-21 | Ch. 14 |

휴식: 2027-02-07 (설 연휴). 16회는 그 다음 주입니다.

발표 노트는 `src/content/notes/`에 있고, 사이트 첫 화면의 일정에서 각 회차에 연결됩니다.

## Getting Started

[Bun](https://bun.sh) 1.4가 필요합니다.

```bash
bun install --frozen-lockfile
bun run dev
```

## Commands

| 명령 | 설명 |
| ---- | ---- |
| `bun install --frozen-lockfile` | `bun.lock`에 적힌 버전 그대로 의존성을 설치합니다. |
| `bun run dev` | 개발 서버를 실행합니다. |
| `bun run build` | `dist/`에 정적 사이트를 빌드합니다. |
| `bun run preview` | 빌드 결과를 로컬에서 확인합니다. |
| `bun run test` | vitest를 한 번 실행합니다. ToC 테스트는 `dist/`를 읽으므로 먼저 빌드해야 합니다. |

## Structure

| 경로 | 설명 |
| ---- | ---- |
| `src/data/schedule.ts` | 일정. 시즌, 회차, 휴식을 정의합니다. |
| `src/content/notes/NN-*.mdx` | 발표 노트. frontmatter는 `title`, `week`, `presenters`, `order`입니다. 한 회차에 노트가 여러 개일 수 있습니다. |
| `src/data/members.ts` | 스터디 참여자 목록. |
| `src/pages/members.astro` | 참여자 페이지. 발표한 회차는 각 노트의 `presenters`에서 계산합니다. |
| `src/styles/global.css` | 전역 스타일. |
| `tests/` | vitest 테스트. |

## Deploy

GitHub Pages에 정적 파일로 배포합니다. 배포 설정은 `.github/workflows/`에 있습니다.

## Tech Stack

- Astro 7
- MDX (remark-math, rehype-katex)
- Tailwind CSS v4
- Bun
- vitest
