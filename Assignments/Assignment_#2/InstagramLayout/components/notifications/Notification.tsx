import { View, Text, Image } from "react-native";
import { Notification } from "@/models/models";


export type NotificationProps = {
    notification: Notification
};


export default function Notification({ notification }: NotificationProps) {
    return (
        <View>
            <Text>{notification.username} и еще {notification.post.likesCnt} человек оценили ваш пост</Text>
            <Image source={{ uri: notification.post.imageUrl }} />
        </View>
    );
}
