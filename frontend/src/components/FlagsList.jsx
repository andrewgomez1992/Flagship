import axios from "axios";
import {
  FlagsGrid,
  FlagCard,
  FlagInfo,
  FlagTitle,
  FlagDescription,
  ToggleButton,
  EmptyState,
} from "../styles/FlagsList.styled";

const FlagsList = ({ flags, setFlags }) => {
  const toggleFlag = async (id, currentState) => {
    try {
      const res = await axios.put(`http://localhost:5050/flags/${id}`, {
        is_enabled: !currentState,
      });
      setFlags(flags.map((flag) => (flag.id === id ? res.data : flag)));
    } catch (err) {
      console.error("Error toggling flag:", err);
    }
  };

  if (!flags.length) return <EmptyState>No flags yet — create one!</EmptyState>;

  return (
    <FlagsGrid>
      {flags.map((flag) => (
        <FlagCard key={flag.id}>
          <FlagInfo>
            <FlagTitle>{flag.name}</FlagTitle>
            <FlagDescription>{flag.description}</FlagDescription>
          </FlagInfo>
          <ToggleButton
            enabled={flag.is_enabled}
            onClick={() => toggleFlag(flag.id, flag.is_enabled)}
          >
            {flag.is_enabled ? "Enabled" : "Disabled"}
          </ToggleButton>
        </FlagCard>
      ))}
    </FlagsGrid>
  );
};

export default FlagsList;
