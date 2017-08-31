import React from 'react'
import moment from 'moment'

import Card, { CardActions, CardHeader, CardText } from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'

const styles = {
  buttonSection: {
    display: 'inline-block',
    textAlign: 'center',
    width: '33%',
  },
  cardHeader: {
    padding: '12px 16px 2px',
  },
  cardHeaderSubtitle: {
    padding: '0',
  },
  cardText: {
    lineHeight: '25px',
    padding: '2px 16px',
  },
  commentsButton: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
  timeline: {
    margin: '0 auto',
    maxWidth: '588px',
  },
  scoreText: {
    color: 'rgba(0, 0, 0, 0.54)',
    display: 'inline-block',
    padding: '8px',
  },
  voteButton: {
    color: 'rgba(0, 0, 0, 0.54)',
    minWidth: '30px',
  }
}

const subtitle = (subreddit, timeAgo, domain) =>
  `${subreddit} • ${timeAgo} • ${domain}`

const Timeline = props =>
  <Card style={styles.timeline}>
    {props.pageData.map(listing =>
      <div key={listing.data.id}>
        <CardHeader
          subtitle={subtitle(
            listing.data.subredditNamePrefixed,
            moment.unix(listing.data.createdUtc).fromNow(true),
            listing.data.domain
          )}
          subtitleStyle={styles.cardHeaderSubtitle}
          style={styles.cardHeader}
        />
        <CardText style={styles.cardText}>{listing.data.title}</CardText>
        <CardActions>
          <div style={styles.buttonSection}>
            <FlatButton
              icon={<FontIcon className='material-icons'>arrow_upward</FontIcon>}
              style={styles.voteButton}
            />
            <CardText style={styles.scoreText}>{listing.data.score}</CardText>
            <FlatButton
              icon={<FontIcon className='material-icons'>arrow_downward</FontIcon>}
              style={styles.voteButton}
            />
          </div>
          <div style={styles.buttonSection}>
            <FlatButton
              label={String(listing.data.numComments)}
              icon={<FontIcon className='material-icons'>comment</FontIcon>}
              style={styles.commentsButton}
            />
          </div>
        </CardActions>
        <Divider />
      </div>
    )}
  </Card>

export default Timeline