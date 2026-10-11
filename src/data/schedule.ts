export interface Season {
  readonly id: number;
  readonly title: string;
}

export interface Meeting {
  readonly week: number;
  readonly date: string;
  readonly season: number;
  readonly chapters: string;
  readonly title: string;
  /** Discord nickname of the assigned presenter. Unset when no one is assigned yet. */
  readonly presenter?: string;
}

export interface Break {
  readonly date: string;
  readonly label: string;
}

export const seasons: readonly Season[] = [
  { id: 1, title: '킥오프와 인프라' },
  { id: 2, title: '추론과 자동 최적화' },
  { id: 3, title: 'GPU·CUDA와 PyTorch' },
];

export const meetings: readonly Meeting[] = [
  { week: 1, date: '2026-10-11', season: 1, chapters: 'Ch. 1–2', title: 'Introduction and AI System Overview / AI System Hardware Overview' },
  { week: 2, date: '2026-10-18', season: 1, chapters: 'Ch. 3', title: 'OS, Docker, and Kubernetes Tuning for GPU-Based Environments' },
  { week: 3, date: '2026-10-25', season: 1, chapters: 'Ch. 4', title: 'Tuning Distributed Networking Communication', presenter: 'ainjai' },
  { week: 4, date: '2026-11-01', season: 1, chapters: 'Ch. 5', title: 'GPU-Based Storage I/O Optimizations', presenter: 'petanerd' },
  { week: 5, date: '2026-11-08', season: 2, chapters: 'Ch. 16 전반', title: 'Profiling, Debugging, and Tuning Inference at Scale (1)', presenter: '정지현' },
  { week: 6, date: '2026-11-15', season: 2, chapters: 'Ch. 16 후반', title: 'Profiling, Debugging, and Tuning Inference at Scale (2)', presenter: 'skyobserver' },
  { week: 7, date: '2026-11-22', season: 2, chapters: 'Ch. 15', title: 'Multinode Inference, Parallelism, Decoding, and Routing Optimizations', presenter: 'William Song' },
  { week: 8, date: '2026-11-29', season: 2, chapters: 'Ch. 17', title: 'Scaling Disaggregated Prefill and Decode for Inference', presenter: 'Limhan' },
  { week: 9, date: '2026-12-06', season: 2, chapters: 'Ch. 18', title: 'Advanced Prefill-Decode and KV Cache Tuning', presenter: '김준형' },
  { week: 10, date: '2026-12-13', season: 2, chapters: 'Ch. 19', title: 'Dynamic and Adaptive Inference Engine Optimizations', presenter: '조상연' },
  { week: 11, date: '2026-12-20', season: 2, chapters: 'Ch. 20', title: 'AI-Assisted Performance Optimizations and Scaling Toward Multimillion GPU Clusters', presenter: 'led0121' },
  { week: 12, date: '2027-01-10', season: 3, chapters: 'Ch. 6', title: 'GPU Architecture, CUDA Programming, and Maximizing Occupancy', presenter: 'ainjai' },
  { week: 13, date: '2027-01-17', season: 3, chapters: 'Ch. 7', title: 'Profiling and Tuning GPU Memory Access Patterns', presenter: 'petanerd' },
  { week: 14, date: '2027-01-24', season: 3, chapters: 'Ch. 8', title: 'Occupancy Tuning, Warp Efficiency, and Instruction-Level Parallelism', presenter: '정지현' },
  { week: 15, date: '2027-01-31', season: 3, chapters: 'Ch. 9', title: 'Increasing CUDA Kernel Efficiency and Arithmetic Intensity', presenter: 'skyobserver' },
  { week: 16, date: '2027-02-14', season: 3, chapters: 'Ch. 10', title: 'Intra-Kernel Pipelining, Warp Specialization, and Cooperative Thread Block Clusters', presenter: 'William Song' },
  { week: 17, date: '2027-02-21', season: 3, chapters: 'Ch. 11', title: 'Inter-Kernel Pipelining, Synchronization, and CUDA Stream-Ordered Memory Allocations', presenter: 'Limhan' },
  { week: 18, date: '2027-02-28', season: 3, chapters: 'Ch. 12', title: 'Dynamic Scheduling, CUDA Graphs, and Device-Initiated Kernel Orchestration', presenter: '김준형' },
  { week: 19, date: '2027-03-07', season: 3, chapters: 'Ch. 13 전반', title: 'Profiling, Tuning, and Scaling PyTorch (1)', presenter: '조상연' },
  { week: 20, date: '2027-03-14', season: 3, chapters: 'Ch. 13 후반', title: 'Profiling, Tuning, and Scaling PyTorch (2)', presenter: 'led0121' },
  { week: 21, date: '2027-03-21', season: 3, chapters: 'Ch. 14', title: 'PyTorch Compiler, OpenAI Triton, and XLA Backends / 마무리 회고', presenter: 'ainjai' },
];

export const breaks: readonly Break[] = [
  { date: '2026-12-27', label: '연말·연초 휴식' },
  { date: '2027-01-03', label: '연말·연초 휴식' },
  { date: '2027-02-07', label: '설 연휴 휴식' },
];
