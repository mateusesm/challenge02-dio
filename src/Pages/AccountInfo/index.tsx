import { Link } from "react-router-dom"
import { Text } from "@chakra-ui/react"

export const AccountInfo = () => {
  return (
    <>
      <Text>
        Account Informations
      </Text>

      <Link to='/account/1'>
        Home account
      </Link>
    </>
  )
}