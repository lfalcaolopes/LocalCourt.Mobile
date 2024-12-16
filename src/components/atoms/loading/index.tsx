import { ActivityIndicator } from "react-native"
import { s } from "./styles"
import { colors } from "@/styles/theme"

function Loading() {
  return (
    <ActivityIndicator style={s.Container} color={colors.acent} /> 
  )
}

export default Loading