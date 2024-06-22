import { Entypo, Ionicons } from "@expo/vector-icons"
import { useRef } from "react"
import { Keyboard, View } from "react-native"
import { StyleSheet, Text } from "react-native"
import { TextInput } from "react-native-gesture-handler"


interface Prop{
    title:string
    setSearchActive:React.Dispatch<React.SetStateAction<boolean>>,
    searchActive:boolean,
    onSearch:(text:string)=>void
}

export default function SearchComponent({
 title,
 setSearchActive,
 searchActive,
 onSearch,
 
}:Prop){
    const inputRef = useRef<TextInput | null>(null);
    function onFocus(){
        setSearchActive(()=>true);
    }
    function handleCancelSearch(){
        Keyboard.dismiss()
        inputRef.current?.clear();
        setSearchActive(()=>false);
    }
  
    return (
        <>
        <View style={styles.search_container}>
            <View style={styles.search_area} >
               <Ionicons name="search-outline" size={24} color="black" style={{marginRight:20}} />
               <TextInput
               style={styles.input}
               placeholder={title}
               onChangeText={onSearch}
               onFocus={onFocus}
               ref={inputRef}
               
              />
            </View>
                { searchActive && 
                  <Entypo name="cross" size={30} color="black" onPress={handleCancelSearch} />
                }
        </View>
        </>
    )


}

const styles = StyleSheet.create({
    search_container:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        gap:5,
        padding:20,
     },
    search_area:{
        flexBasis:"80%",
        flexShrink:1,
        flexGrow:1,
        height:50,
        backgroundColor:"white",
        paddingHorizontal:20,
        borderRadius:20,
        flexDirection:"row",
        alignItems:"center",
        
    },
    input:{
        fontSize:15,
        flexBasis:"90%",
    }
})