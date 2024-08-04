import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../@/components/ui/tabs"


const Sort = () => {
  return (
    <div>
      <h1 className='font-bold text-base text-dataGray'>Sort Algorithm</h1>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  )
}

export default Sort
