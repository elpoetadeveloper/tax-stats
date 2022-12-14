import { User } from "@supabase/supabase-js";
import type { NextApiRequest } from "next";
import React from 'react'
import { Taxes } from "../../components/tax/Taxes";
import { ITaxTypes } from "../../interfaces/ITax";
import supabase from '../../supabase/supabaseClient'

const Tax= ({user, taxTypes}:{user:User, taxTypes: ITaxTypes[]}) => {
  return (
    <Taxes taxTypes={taxTypes} />
  )
}

export default Tax

export async function getServerSideProps({ req }:{ req:NextApiRequest }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)
  if (!user) {
    return { props: {}, redirect: { destination: '/signin' } }
  }
  const { data: taxTypes, error } = await supabase.from('tax_type').select('*');

  return { props: { user, taxTypes } }
}
