import React from 'react'
import AddmatchButton from './AddmatchButton'
import AddmatchItem from './AddmatchItem'
import MatchContext from '../../context/Matchcontext/MatchContext'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
export default function AddMatch() {
  const context = useContext(MatchContext)
  const gid = useParams()
  const g_id = gid.id
  const { Match, getMatch } = context
  useEffect(() => {
    getMatch(g_id)

  }, [])
  return (
    <>
      <div>
        <AddmatchButton g_id={g_id} />
        <div className='' style={{ margin: "60px 30px", color: "white", backgroundColor: "#061a24", height: "100vh", borderRadius: "10px", padding: "20px 20px" }}>
          <h2 style={{ textDecoration: "underline", marginBottom: "20px" }}>Match List</h2>
          {Match.length === 0 ? "NO MATCH" :
            Match.map((tn) => {
              return <AddmatchItem key={tn._id} Match={tn} />
            })
          }
        </div>
      </div>
    </>
  )
}
