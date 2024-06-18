import { StyleSheet, View ,Text, Pressable} from "react-native";
import CardWrapper from "./CardWrapper";
import { useState } from "react";
import { DummyIcon } from "@/assets/icons/DummyIcon";
import { useRouter } from "expo-router";
import { Platform } from 'react-native'

const dummyFeature = [
    'Budgeting',
    'Subscription',
    'Investment',
    'Marketing',
    'Transactions',
    'Market Place'
]

export function ExploreKredSmart(){
    const [kredSmartFeature, setKredSmartFeature] = useState<string[]>(dummyFeature);
    const router = useRouter();

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.header}>
                 Explore KredSmart
                </Text>
            </View>
            <CardWrapper>
                <View style={styles.flexContainer}>
                 {kredSmartFeature && kredSmartFeature.map((feature,index)=>{
                      return (
                        <Pressable 
                            onPress={()=>router.push(`/${feature.toLowerCase()}`)} 
                            key={index} 
                        >
                         <View 
                            style={{alignItems:'center',gap:12,...Platform.select({ web: {
                                cursor: 'pointer',
                            }}) }}
                         >
                        <DummyIcon/>
                        <Text 
                        style={{fontSize:15,fontWeight:'bold' , color:"#7A7A7A"}}
                        >
                        {feature}
                        </Text>
                         </View>
                        </Pressable>
                      )
                 })
                 }
                </View>
            </CardWrapper>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-start",     
        paddingLeft:20,
        marginVertical: 20                              
    },
    header:{
        fontSize: 23,
        fontWeight: "700",
        textAlign: "center",
        color:"black",
        lineHeight: 24,
        
    },
    flexContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:'center',
        gap:25,
        flexWrap:"wrap",
        alignItems:"center",
    }
})