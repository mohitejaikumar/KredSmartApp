import { SubscriptionProps } from "@/interfaces";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import CardWrapper from "./CardWrapper";
import { CustomCardImage } from "./CustomImage";
import subscriptionImage from "@/assets/images/subscription.jpg";
import { FlatList, ScrollView } from "react-native-gesture-handler";

export const SubscriptionsCard = ({totalSubscriptions}:{totalSubscriptions:SubscriptionProps[]})=>{

    const [newlyAddedSubscription,setNewlyAddedSubscription] = useState<SubscriptionProps[]>([]);
    const [currentSubscription,setCurrentSubscription] = useState<SubscriptionProps[]>([]);

    useEffect(()=>{
        totalSubscriptions.forEach((subscription)=>{
        const timeDifference = new Date().getTime() - new Date(subscription.issuedDate).getTime();
        const daysDifference = timeDifference / (1000 * 3600 * 24);
        if (daysDifference > 30) {
        setCurrentSubscription((s)=>[...s,subscription]);
        } else {
        setNewlyAddedSubscription((s)=>[...s,subscription]);
        }
     })
    },[]);
   
    return (
        <>
          <View style={{marginVertical:20}}>
            <ScrollView>
            <Text style={{fontSize:15,fontWeight:'semibold' , color:"black",marginLeft:10}}>
             Newly added subscriptions ({newlyAddedSubscription.length})
            </Text>
            <Divider style={{marginVertical:13}}/>
          <View style={{height:250}}>
              <FlatList
                data={newlyAddedSubscription}
                renderItem={({item,index}) => <>
                       <View key={index} style={styles.flexContianer}>
                         <CustomCardImage imageURL={subscriptionImage} height={56} width={56} borderRadius={20}/>
                         <Text style={{fontSize:12,fontWeight:'semibold',color:"#7A7A7A"}}>{item.name}</Text>
                       </View>
                    </> }
                keyExtractor={item=> item.name}
                numColumns={3}
             />
          </View>
           
            <Text style={{fontSize:15,fontWeight:'semibold' , color:"black" , marginTop:40 , marginLeft:10}}>
             Current subscriptions ({currentSubscription.length})
            </Text>
            <Divider style={{marginVertical:13}}/>
            <View style={{height:250}}>
                <FlatList
                data={currentSubscription}
                renderItem={({item,index}) => <>
                       <View key={index} style={styles.flexContianer}>
                         <CustomCardImage imageURL={subscriptionImage} height={56} width={56} borderRadius={20}/>
                         <Text style={{fontSize:12,fontWeight:'semibold',color:"#7A7A7A"}}>{item.name}</Text>
                       </View>
                    </> }
                keyExtractor={item=> item.name}
                numColumns={3}
             />
            </View>
             
            </ScrollView>
          </View>
        </>
    )
}

const styles = StyleSheet.create({
    flexContianer:{
     width:100,
     height:120,
     borderRadius:20,
     backgroundColor:"#F5F5F5",
     marginVertical:5,
     alignItems:'center',
     justifyContent:'center',
     gap:10,
     marginHorizontal:10
    }
})