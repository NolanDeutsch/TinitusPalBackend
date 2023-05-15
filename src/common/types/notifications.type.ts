import { NotificationType } from 'common/enums/notification-type.enums';

export type Notification = {
  createdAt: string;
  description: string;
  id: number;
  link: string;
  notifierId: string;
  read: boolean;
  title: string;
  type: string;
  userId: string;
};
