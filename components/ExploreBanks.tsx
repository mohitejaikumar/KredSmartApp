import { FlatList, ImageSourcePropType, Text } from "react-native"
import { StyleSheet, View } from "react-native"
import { CustomCardImage } from "./CustomImage"

interface Prop{
    name:string,
    logoURL:ImageSourcePropType
}

export default function ExploreBanks({banks}:{
    banks:Prop[] 
}){
    return(
        <>
          <View style={styles.explore_banks_container}>
            <Text style={{fontSize:22,fontWeight:'bold', marginBottom:15}}>Explore Banks</Text>
            <View style={styles.flexbox}>
            { banks.length>0 &&
              banks.slice(0,6).map((item,index)=>{
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
                banks.length>3 &&
                <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                  <Text style={{fontSize:15,fontWeight:'semibold',color:"#21A870"}}>View more</Text>
                </View>
            }
          </View>
        </>
    )
}

const styles = StyleSheet.create({
      explore_banks_container:{
        paddingHorizontal:20
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
      }
})