export interface ITextMessage {
    id: number;
    text: string;
    senderId: number;
    senderName: string;
    senderSrc: string;
    time: string;
    isRead: boolean;
}