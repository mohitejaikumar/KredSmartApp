import { View , Text, StyleSheet, ImageSourcePropType, ScrollView } from "react-native";
import SearchComponent from "@/components/SearchComponent";
import { useState } from "react";
import subscriptionImage from "@/assets/images/subscription.jpg";
import ExploreBanks from "@/components/ExploreBanks";
import ExploreServices from "@/components/ExploreServices";

const recentSearch:string[] = [
    "HDFC Bank",
    "ICICI Bank",
    "Canara Bank",
    "Bank of Baroda",
]

const banks:{
    name:string,
    logoURL:ImageSourcePropType
}[] = [
    {
        name:"HDFC Bank",
        logoURL:subscriptionImage,
    },
    {
        name:"ICICI Bank",
        logoURL:subscriptionImage,
    },
    {
        name:"Canara Bank",
        logoURL:subscriptionImage
    },
    {
        name:"HDFC Bank",
        logoURL:subscriptionImage,
    },
    {
        name:"Bank of Baroda",
        logoURL:subscriptionImage,
    }
    

]

const services:{
name:string,
logoURL:ImageSourcePropType,
serviceType:string
}[] = [
    {
      name: "Swiggy",
      logoURL: subscriptionImage,
      serviceType: "Food"
    },
    {
      name: "Zomato",
      logoURL: subscriptionImage,
      serviceType: "Food"
    },
    {
      name:"Amazon",
      logoURL:subscriptionImage,
      serviceType:"Shopping"
    },
    {
      name:"Myntra",
      logoURL:subscriptionImage,
      serviceType:"Shopping"
    },
    {
      name:"Flipkart",
      logoURL:subscriptionImage,
      serviceType:"Shopping"
    },
    {
      name:"Netflix",
      logoURL:subscriptionImage,
      serviceType:"Entertainment"
    },
    {
      name:"Uber",
      logoURL:subscriptionImage,
      serviceType:"Travel"
    }

]

export default function MarketPlace(){
    const [searchActive, setSearchActive] = useState(false);
    function handleSearch(text:string){

    }
    return (
        <>
        <ScrollView>
            <View>
                <SearchComponent 
                title="Search for credit cards" 
                searchActive={searchActive}
                setSearchActive={setSearchActive}
                onSearch={handleSearch}
                />
            {searchActive && (recentSearch.length>0) && 
                <View style={styles.recent_search_container}>
                    <Text style={{fontSize:16 , fontWeight:"bold" , marginBottom:15}}>Recent Search</Text>
                    { recentSearch.map((item,index)=>{
                        return(
                            <>
                            <Text key={index+1} style={{marginVertical:6}}>{item}</Text>
                            </>
                        )
                    })
                    }
                </View>
            }



            </View>
            { !searchActive && 
                <>
                    <ExploreBanks banks={banks} />
                    <ExploreServices services={services} />
                </>
            }
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    recent_search_container:{
        paddingLeft:20
    }

})