// 사용자 관련 타입
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

// 메모 관련 타입
export interface Memo {
  id: string;
  userId: string;
  title: string;
  content: string;
  summary: string;
  category: string;
  tags: string[];
  isVoiceMemo: boolean;
  audioUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

// 카테고리 관련 타입
export interface Category {
  id: string;
  name: string;
  color: string;
  userId: string;
  createdAt: Date;
}

// API 응답 타입
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}

// 컴포넌트 Props 타입
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}
