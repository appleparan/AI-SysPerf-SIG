# AI SysPerf SIG

PyTorchKR "AI Systems Performance Engineering" 북 스터디의 발표 노트를 모은 사이트입니다.

- 사이트: <https://ai-sysperf-sig.liam.kim/>

## Sessions

| Week | 주제 | 범위 | 발표 |
| ---- | ---- | ---- | ---- |
| 1 | 오리엔테이션 | Ch. 1 | appleparan |

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
| `src/content/sessions/NN-*.mdx` | 회차별 발표 노트. 회차당 파일 하나입니다. |
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
