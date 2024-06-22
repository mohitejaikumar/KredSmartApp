import { FlatList, ImageSourcePropType, Pressable, StyleSheet, Text } from "react-native"
import { View } from "react-native"
import { CustomCardImage } from "./CustomImage"
import { useState } from "react"

const serviceTypes:string[] = [
    "Food",
    "Shopping",
    "Entertainment",
    "Travel",
    "Sports",
    "Health",
    "Education",
    "Banking",
    "Insurance",
    "Utilities",
    "Other"
]

interface Prop{
    name:string,
    logoURL:ImageSourcePropType,
    serviceType:string
}

export default function ExploreServices({services}:{
    services:Prop[]
}){
    const [selectedServiceType, setSelectedServiceType] = useState<string>(serviceTypes[0]);
    const [selectedService , setSelectedService] = useState<Prop[]>(services.filter((service)=>service.serviceType===serviceTypes[0]));
    function handleServiceTypePress(type:string){
        setSelectedServiceType(()=>type);
        setSelectedService(()=>services.filter((service)=>service.serviceType===type));
    }
    return(
        <>
        <View style={styles.explore_services_container}>
            <Text style={{fontSize:22,fontWeight:'bold', marginBottom:15}}>Explore Services</Text>
            <FlatList
                data={serviceTypes}
                renderItem={({item,index}) => <>
                       <Pressable key={index} style={styles.serviceTypeContainer} onPress={()=>handleServiceTypePress(item)}>
                         <Text style={{fontSize:13,fontWeight:'semibold',color:"#7A7A7A"}}>{item}</Text>
                       </Pressable>
                    </> }
                keyExtractor={item=> item}
                horizontal
                showsHorizontalScrollIndicator={false}
            
             />
             <View style={styles.flexbox}>
            { selectedService.length>0 &&
              selectedService.slice(0,6).map((item,index)=>{
                return(
                    <>
                    <View key={index} style={styles.flexContianer}>
                         <CustomCardImage imageURL={item.logoURL} height={56} width={56} borderRadius={20}/>
                         <Text style={{fontSize:12,fontWeight:'semibold',color:"#7A7A7A"}}>{item.name}</Text>
                       </View>
                    </>
                )
              })
            }
            </View>
            {
                selectedService.length>3 &&
                <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:10}}>
                  <Text style={{fontSize:15,fontWeight:'semibold',color:"#21A870"}}>View more</Text>
                </View>
            }
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    explore_services_container:{
        paddingHorizontal:20
    },
    serviceTypeContainer:{
        paddingHorizontal:15,
        paddingVertical:5,
        borderWidth:1,
        borderRadius:15,
        backgroundColor:"#ebedf0",
        marginHorizontal:5,
        marginVertical:5,
    },
    flexContianer:{
        width:100,
        height:120,
        borderRadius:20,
        backgroundColor:"#ebedf0",
        marginVertical:5,
        alignItems:'center',
        justifyContent:'center',
        gap:10,
        marginHorizontal:12,
    },
    flexbox:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
        marginTop:10
    }
})