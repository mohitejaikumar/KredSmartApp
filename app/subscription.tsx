import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CardWrapper from "@/components/CardWrapper";
import { formatPrice } from "@/helpers/priceFormat";
import { Divider } from "react-native-elements";
import { SubscriptionProps } from "@/interfaces";
import { SubscriptionsCard } from "@/components/SubscriptionsCard";
import { ScrollView } from 'react-native-virtualized-view';


const totalSubscriptions:SubscriptionProps[] = [
  {
    imageURL: "https://example.com/images/subscription1.png",
    name: "Netflix",
    issuedDate: "2024-01-01",
    renewDate: "2024-02-01",
    subscriptionfees: "$9.99",
    issuerBankName: "Bank of America",
    issuerBankAccountNumber: "123456789"
  },
  {
    imageURL: "https://example.com/images/subscription2.png",
    name: "Spotify",
    issuedDate: "2024-02-15",
    renewDate: "2024-03-15",
    subscriptionfees: "$4.99",
    issuerBankName: "Chase Bank",
    issuerBankAccountNumber: "987654321"
  },
  {
    imageURL: "https://example.com/images/subscription3.png",
    name: "Amazon Prime",
    issuedDate: "2024-03-01",
    renewDate: "2024-04-01",
    subscriptionfees: "$12.99",
    issuerBankName: "Wells Fargo",
    issuerBankAccountNumber: "567890123"
  },
  {
    imageURL: "https://example.com/images/subscription4.png",
    name: "Hulu",
    issuedDate: "2024-04-20",
    renewDate: "2024-05-20",
    subscriptionfees: "$6.99",
    issuerBankName: "Citibank",
    issuerBankAccountNumber: "345678901"
  },
  {
    imageURL: "https://example.com/images/subscription5.png",
    name: "Disney+",
    issuedDate: "2024-05-10",
    renewDate: "2024-06-10",
    subscriptionfees: "$7.99",
    issuerBankName: "TD Bank",
    issuerBankAccountNumber: "234567890"
  },
  {
    imageURL: "https://example.com/images/subscription6.png",
    name: "Apple Music",
    issuedDate: "2024-06-01",
    renewDate: "2024-07-01",
    subscriptionfees: "$9.99",
    issuerBankName: "PNC Bank",
    issuerBankAccountNumber: "123450987"
  },
  {
    imageURL: "https://example.com/images/subscription7.png",
    name: "YouTube Premium",
    issuedDate: "2024-06-10",
    renewDate: "2024-07-10",
    subscriptionfees: "$11.99",
    issuerBankName: "Capital One",
    issuerBankAccountNumber: "234561098"
  },
  {
    imageURL: "https://example.com/images/subscription8.png",
    name: "HBO Max",
    issuedDate: "2024-06-12",
    renewDate: "2024-07-12",
    subscriptionfees: "$14.99",
    issuerBankName: "US Bank",
    issuerBankAccountNumber: "345672109"
  },
  {
    imageURL: "https://example.com/images/subscription9.png",
    name: "Peacock",
    issuedDate: "2024-06-15",
    renewDate: "2024-07-15",
    subscriptionfees: "$4.99",
    issuerBankName: "Regions Bank",
    issuerBankAccountNumber: "456783210"
  },
  {
    imageURL: "https://example.com/images/subscription10.png",
    name: "Paramount+",
    issuedDate: "2024-06-18",
    renewDate: "2024-07-18",
    subscriptionfees: "$5.99",
    issuerBankName: "SunTrust Bank",
    issuerBankAccountNumber: "567894321"
  },
  {
    imageURL: "https://example.com/images/subscription3.png",
    name: "jkPrime",
    issuedDate: "2024-03-01",
    renewDate: "2024-04-01",
    subscriptionfees: "$12.99",
    issuerBankName: "Wells Fargo",
    issuerBankAccountNumber: "567890123"
  },
  {
    imageURL: "https://example.com/images/subscription3.png",
    name: "pkPrime",
    issuedDate: "2024-03-01",
    renewDate: "2024-04-01",
    subscriptionfees: "$12.99",
    issuerBankName: "Wells Fargo",
    issuerBankAccountNumber: "567890123"
  },
];

export default function Subscription() {
  const [subscriptionAmount , setSubscriptionAmount] = useState(4000);
  const [subscription , setSubscription] = useState<SubscriptionProps[]>(totalSubscriptions);
  return (
    <>
    <ScrollView>
      <CardWrapper>
         <View>
            <Text style={{fontSize:15,fontWeight:'bold' , color:"#7A7A7A", lineHeight: 20, letterSpacing:2,
              marginVertical:20
            }}>
              YOUR SUBSCRIPTION
            </Text>
            <View style={{marginVertical:8}}>
              <Text style={{fontSize:27,fontWeight:'bold' , color:"black"}}>
              {formatPrice.format(subscriptionAmount)}
              </Text>
              <Text style={{marginLeft:6}}>
                Spent on subscriptions
              </Text>
            </View>
            <Divider style={{marginVertical:13}}/>
            <SubscriptionsCard totalSubscriptions={totalSubscriptions}/>
         </View>
      </CardWrapper>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
