import { Suspense } from 'react'
import Link from 'next/link'
import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'
// import Repo from '../../../components/Repo'

const RepoPage = ({ params: { name } }) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-button'>
        Back To Repositories
      </Link>
      {/* <Repo name={name} />
      <RepoDirs name={name} /> */}
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  )
}

export default RepoPage
