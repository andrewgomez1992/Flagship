import { useEffect, useState } from "react";
import axios from "axios";
import {
  PageContainer,
  ContentWrapper,
  Title,
} from "../styles/FlagsPage.styled";
import FlagsList from "../components/FlagsList";

const FlagsPage = () => {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const res = await axios.get("http://localhost:5050/flags");
        setFlags(res.data);
      } catch (err) {
        console.error("Error fetching flags:", err);
      }
    };
    fetchFlags();
  }, []);

  return (
    <PageContainer>
      <ContentWrapper>
        <Title>Feature Flags Dashboard</Title>
        <FlagsList flags={flags} setFlags={setFlags} />
      </ContentWrapper>
    </PageContainer>
  );
};

export default FlagsPage;
