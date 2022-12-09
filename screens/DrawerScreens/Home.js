import * as React from "react";
import { ScrollView, Text, View, Pressable, Image } from "react-native";
import { useScrollToTop } from "@react-navigation/native";
import { gStyle } from "../constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// components
import Cast from "../components/Cast";
import HeaderHome from "../components/HeaderHome";
import PromotionBanner from "../components/PromotionBanner";
import ShowScroller from "../components/ShowScroller";

const Home = () => {
  // on active tab press, scroll to top
  const ref = React.useRef(null);
  useScrollToTop(ref);

  // local state
  const [showHeader, setShowHeader] = React.useState(true);

  return (
    <View style={gStyle.container}>
      <HeaderHome show={showHeader} />

      {/* <ScrollView
        ref={ref}
        bounces
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <PromotionBanner />

        <Text style={gStyle.heading}>Previews</Text>
        <ShowScroller dataset="previews" type="round" />

        <Text style={gStyle.heading}>My List</Text>
        <ShowScroller dataset="myList" />

        <Text style={gStyle.heading}>Popular on Netflix</Text>
        <ShowScroller />

        <Text style={gStyle.heading}>Trending Now</Text>
        <ShowScroller />

        <Text style={gStyle.heading}>Watch It Again</Text>
        <ShowScroller />

        <Text style={gStyle.heading}>NETFLIX ORIGINALS</Text>
        <ShowScroller />

        <Text style={gStyle.heading}>Documentaries</Text>
        <ShowScroller />

        <View style={gStyle.spacer3} />
      </ScrollView> */}
      <ScrollView
        ref={ref}
        bounces
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <PromotionBanner />
        <View style={gStyle.headingTitle}>
          <Text style={gStyle.heading}>Previews</Text>
          <MaterialCommunityIcons
            name="youtube"
            size={35}
            color="red"
            style={{
              padding: 0,
            }}
          />
        </View>

        <ShowScroller
          dataset="previews"
          type="round"
          name="youtube"
          color="red"
        />
        {/* <Text style={gStyle.heading}>My List</Text>
        <ShowScroller dataset="myList" name="netflix" color="red" /> */}

        <View style={gStyle.headingTitle}>
          <Text style={gStyle.heading}>Popular on Netflix</Text>
          <MaterialCommunityIcons
            name="netflix"
            size={35}
            color="red"
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </View>

        <ShowScroller dataset="myList" name="netflix" color="red" />

        <View style={gStyle.headingTitle}>
          <Text style={gStyle.heading}>Prime Video</Text>
          {/* Trending Now */}
          {/* <Image
            source={require('../assets/images/AmazonPrime.png')}
            style={{width: 40, height: 40}}
          /> */}
          {/* <Image
            source={images.AmazonPrime}
            style={{ width: 40, height: 40 }}
          /> */}
        </View>

        <ShowScroller dataset="dumbData" name="netflix" color="red" />

        <View style={gStyle.headingTitle}>
          <Text style={gStyle.heading}>HostStar</Text>
          {/* <Image
            source={require('../assets/images/disney_plus.png')}
            style={{width: 40, height: 40}}
          /> */}
          {/* <Image source={images.disneyPlus} style={{ width: 40, height: 40 }} /> */}
        </View>
        <ShowScroller dataset="hostStar" name="netflix" color="red" />
        <View style={gStyle.headingTitle}>
          <Text style={gStyle.heading}>NETFLIX ORIGINALS</Text>

          <MaterialCommunityIcons
            name="netflix"
            size={35}
            color="red"
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </View>

        <ShowScroller dataset="dumbData" name="netflix" color="red" />
        <View style={gStyle.headingTitle}>
          <Text style={gStyle.heading}>Documentaries</Text>

          <MaterialCommunityIcons
            name="netflix"
            size={35}
            color="red"
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </View>

        <ShowScroller dataset="myList" name="netflix" color="red" />

        <View style={gStyle.spacer3} />
      </ScrollView>
    </View>
  );
};

export default Home;
