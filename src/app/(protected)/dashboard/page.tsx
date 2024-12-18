import { onBoardUser } from '@/actions/user'
import { redirect } from 'next/navigation'

type Props = {}

const DashboardPage = async (props: Props) => {
    const user  = await onBoardUser()

    if(user.status === 200 || user.status === 201) {
      redirect(`dashboard/${user.data?.firstname} ${user.data?.lastname}`)
    }

    else{
      redirect('/sign-in')
    }
}

export default DashboardPage