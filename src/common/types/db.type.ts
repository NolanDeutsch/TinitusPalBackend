export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      chat_groups: {
        Row: {
          createdAt: string | null
          id: number
          name: string | null
          type: string | null
        }
        Insert: {
          createdAt?: string | null
          id?: number
          name?: string | null
          type?: string | null
        }
        Update: {
          createdAt?: string | null
          id?: number
          name?: string | null
          type?: string | null
        }
      }
      chat_messages: {
        Row: {
          chatGroupId: number
          content: string | null
          createdAt: string | null
          id: number
          media: string | null
          userId: string
        }
        Insert: {
          chatGroupId: number
          content?: string | null
          createdAt?: string | null
          id?: number
          media?: string | null
          userId: string
        }
        Update: {
          chatGroupId?: number
          content?: string | null
          createdAt?: string | null
          id?: number
          media?: string | null
          userId?: string
        }
      }
      live_stream_comments: {
        Row: {
          content: string | null
          createdAt: string | null
          id: number
          liveStreamId: number | null
          parentCommentId: number | null
          userId: string | null
        }
        Insert: {
          content?: string | null
          createdAt?: string | null
          id?: number
          liveStreamId?: number | null
          parentCommentId?: number | null
          userId?: string | null
        }
        Update: {
          content?: string | null
          createdAt?: string | null
          id?: number
          liveStreamId?: number | null
          parentCommentId?: number | null
          userId?: string | null
        }
      }
      live_streams: {
        Row: {
          createdAt: string | null
          dateTime: string | null
          description: string | null
          id: number
          link: string | null
          title: string | null
        }
        Insert: {
          createdAt?: string | null
          dateTime?: string | null
          description?: string | null
          id?: number
          link?: string | null
          title?: string | null
        }
        Update: {
          createdAt?: string | null
          dateTime?: string | null
          description?: string | null
          id?: number
          link?: string | null
          title?: string | null
        }
      }
      notifications: {
        Row: {
          createdAt: string | null
          description: string | null
          id: number
          link: string | null
          notifierId: string | null
          read: boolean | null
          title: string | null
          type: string | null
          userId: string | null
        }
        Insert: {
          createdAt?: string | null
          description?: string | null
          id?: number
          link?: string | null
          notifierId?: string | null
          read?: boolean | null
          title?: string | null
          type?: string | null
          userId?: string | null
        }
        Update: {
          createdAt?: string | null
          description?: string | null
          id?: number
          link?: string | null
          notifierId?: string | null
          read?: boolean | null
          title?: string | null
          type?: string | null
          userId?: string | null
        }
      }
      post_comments: {
        Row: {
          content: string | null
          createdAt: string | null
          id: number
          media: string | null
          parentCommentId: number | null
          postId: number
          text: string | null
          userId: string
        }
        Insert: {
          content?: string | null
          createdAt?: string | null
          id?: number
          media?: string | null
          parentCommentId?: number | null
          postId: number
          text?: string | null
          userId: string
        }
        Update: {
          content?: string | null
          createdAt?: string | null
          id?: number
          media?: string | null
          parentCommentId?: number | null
          postId?: number
          text?: string | null
          userId?: string
        }
      }
      post_group_categories: {
        Row: {
          createdAt: string | null
          id: number
          name: string | null
        }
        Insert: {
          createdAt?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          createdAt?: string | null
          id?: number
          name?: string | null
        }
      }
      post_groups: {
        Row: {
          allowInvitation: boolean | null
          avatar: string | null
          categoryId: number | null
          cover: string | null
          createdAt: string | null
          createdBy: string | null
          description: string | null
          id: number
          name: string | null
        }
        Insert: {
          allowInvitation?: boolean | null
          avatar?: string | null
          categoryId?: number | null
          cover?: string | null
          createdAt?: string | null
          createdBy?: string | null
          description?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          allowInvitation?: boolean | null
          avatar?: string | null
          categoryId?: number | null
          cover?: string | null
          createdAt?: string | null
          createdBy?: string | null
          description?: string | null
          id?: number
          name?: string | null
        }
      }
      posts: {
        Row: {
          content: string | null
          createdAt: string | null
          id: number
          media: string[] | null
          postGroupId: number
          text: string | null
          userId: string
        }
        Insert: {
          content?: string | null
          createdAt?: string | null
          id?: number
          media?: string[] | null
          postGroupId: number
          text?: string | null
          userId: string
        }
        Update: {
          content?: string | null
          createdAt?: string | null
          id?: number
          media?: string[] | null
          postGroupId?: number
          text?: string | null
          userId?: string
        }
      }
      symptoms: {
        Row: {
          createdAt: string | null
          id: number
          name: string | null
          type: number | null
        }
        Insert: {
          createdAt?: string | null
          id?: number
          name?: string | null
          type?: number | null
        }
        Update: {
          createdAt?: string | null
          id?: number
          name?: string | null
          type?: number | null
        }
      }
      user_chat_groups: {
        Row: {
          chatGroupId: number | null
          createdAt: string | null
          id: number
          userId: string | null
        }
        Insert: {
          chatGroupId?: number | null
          createdAt?: string | null
          id?: number
          userId?: string | null
        }
        Update: {
          chatGroupId?: number | null
          createdAt?: string | null
          id?: number
          userId?: string | null
        }
      }
      user_post_groups: {
        Row: {
          createdAt: string | null
          id: number
          isAccepted: boolean | null
          postGroupId: number | null
          role: string | null
          userId: string | null
        }
        Insert: {
          createdAt?: string | null
          id?: number
          isAccepted?: boolean | null
          postGroupId?: number | null
          role?: string | null
          userId?: string | null
        }
        Update: {
          createdAt?: string | null
          id?: number
          isAccepted?: boolean | null
          postGroupId?: number | null
          role?: string | null
          userId?: string | null
        }
      }
      user_symptoms: {
        Row: {
          causes: string[] | null
          createdAt: string | null
          id: number
          symptomId: number | null
          userId: string | null
          value: Json | null
        }
        Insert: {
          causes?: string[] | null
          createdAt?: string | null
          id?: number
          symptomId?: number | null
          userId?: string | null
          value?: Json | null
        }
        Update: {
          causes?: string[] | null
          createdAt?: string | null
          id?: number
          symptomId?: number | null
          userId?: string | null
          value?: Json | null
        }
      }
      users: {
        Row: {
          age: number | null
          avatar: string | null
          email: string | null
          firstName: string | null
          hideLocationAge: boolean | null
          id: string
          image: string | null
          isAccountComplete: boolean | null
          lastName: string | null
          location: string | null
          role: string | null
        }
        Insert: {
          age?: number | null
          avatar?: string | null
          email?: string | null
          firstName?: string | null
          hideLocationAge?: boolean | null
          id: string
          image?: string | null
          isAccountComplete?: boolean | null
          lastName?: string | null
          location?: string | null
          role?: string | null
        }
        Update: {
          age?: number | null
          avatar?: string | null
          email?: string | null
          firstName?: string | null
          hideLocationAge?: boolean | null
          id?: string
          image?: string | null
          isAccountComplete?: boolean | null
          lastName?: string | null
          location?: string | null
          role?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_comments_by_post: {
        Args: {
          post_id: number
        }
        Returns: Json
      }
      get_or_create_private_chat_group_by_receiver: {
        Args: {
          receiver_id: string
        }
        Returns: Json
      }
      get_session: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      search_chat_groups: {
        Args: {
          search_text: string
        }
        Returns: {
          id: number
          name: string
          receiverId: string
        }[]
      }
      search_users_by_symptoms_or_causes: {
        Args: {
          search_text: string
          v_symptoms: number[]
          v_causes: string[]
        }
        Returns: {
          id: string
          firstName: string
          lastName: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
