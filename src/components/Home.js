import * as utility from "../configuration";

import {
  fetchPostCodeAction,
  fetchPostCodeListAction,
} from "../redux/slices/postCodeSlices";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Select from "react-select";
import styled from "styled-components";

function Home() {
  //select state from store
  const state = useSelector((state) => state);

  //set initial state
  const { postCodeDetails, loading, error } = state;
  const [listOfCity, setListOfCity] = useState([]);
  const [selectedPostCode, setSelectedPostCode] = useState("LS9 8BN");
  const [location, setLocation] = useState("");

  //Dispatch action
  const dispatch = useDispatch();

  //Fetch postcode details and set location area
  useEffect(() => {
    dispatch(fetchPostCodeAction(selectedPostCode));
    const newLatitude = postCodeDetails?.result.latitude;
    setLocationArea(newLatitude);
  }, [dispatch, postCodeDetails?.result.latitude, selectedPostCode]);

  //Handel change postcode from dropdown and set new selected postcode
  const handleChange = (e) => {
    setSelectedPostCode(e.value);
  };

  //Get the result from the api and set the result in the callback function
  const callbackFunction = (data) => {
    const postCodeData = data?.payload.result;
    let postCodeList = postCodeData?.map((key) => ({
      label: key,
      value: key,
    }));
    setListOfCity(postCodeList);
  };

  //Handel postcode value from searchbar and Fetch result from PostcodeList API
  const handleInputChange = (newValue) => {
    if (newValue !== "") {
      dispatch(fetchPostCodeListAction(newValue)).then(callbackFunction);
    }
    const newLatitude = postCodeDetails?.result.latitude;
    setLocationArea(newLatitude);
  };

  //Change location area as per latitude
  const setLocationArea = (newLatitude) => {
    if (newLatitude < 52.229466) {
      setLocation(utility.setLocation.South);
    } else if (newLatitude >= 52.229466 && newLatitude < 53.27169) {
      setLocation(utility.setLocation.Midlands);
    } else {
      setLocation(utility.setLocation.North);
    }
  };

  return (
    <Container bgImage={utility.backgroundImg}>
      <Title>Find out the post code details</Title>
      <PostCodeController>
        <Select
          options={listOfCity}
          onChange={handleChange}
          placeholder="Type to search post code"
          styles={utility.customStyles}
          onInputChange={handleInputChange}
        />
      </PostCodeController>

      {loading ? (
        <Loading>Loading please wait...</Loading>
      ) : error ? (
        <Error>{error?.error}</Error>
      ) : (
        <PostCodeBOX>
          <Location>{location}</Location>
          <PostCodeDetails>
            <Caption>
              <Label>District:</Label>
              <Value>{postCodeDetails?.result.admin_district}</Value>
            </Caption>

            <Caption>
              <Label>Constituency:</Label>
              <Value>
                {postCodeDetails?.result.parliamentary_constituency}
              </Value>
            </Caption>
            <Caption>
              <Label>Region:</Label>
              <Value>{postCodeDetails?.result.region}</Value>
            </Caption>
            <Caption>
              <Label>Country</Label>
              <Value>{postCodeDetails?.result.country}</Value>
            </Caption>
          </PostCodeDetails>
        </PostCodeBOX>
      )}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 90px);
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const Title = styled.h2`
  text-align: center;
  color: #fff;
  padding: 25px 0 20px 0;
  margin: 0;
`;
const PostCodeController = styled.div`
  width: 100%;
  text-align: center;
`;
const PostCodeBOX = styled.div`
  text-align: center;
`;
const Location = styled.h3`
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
  margin: 40px 0 15px 0;
`;
const PostCodeDetails = styled.div`
  position: relative;
  display: inline-block;
  margin: 30px auto;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 15px 25px;
  text-align: left;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.2);
`;
const Loading = styled.div`
  text-align: center;
`;
const Caption = styled.p`
  font-size: 19px;
  font-weight: 400;
  margin: 0;
  padding: 5px 0;
  color: #fff;
  text-shadow: 1px 2px rgb(50 50 70 / 50%);
  border-bottom: 1px solid #cfcfcf;
`;
const Label = styled.span`
  font-size: 16px;
`;
const Value = styled.span`
  font-weight: bold;
  padding: 0 0 0 15px;
`;
const Error = styled.p`
  color: #dc1e1c;
  text-align: center;
  text-shadow: 0px 1px rgb(216 7 7 / 20%);
`;
