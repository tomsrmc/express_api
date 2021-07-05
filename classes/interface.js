
import mongodb from 'mongodb'
import axios from 'axios'
import R from 'ramda'
import moment from 'moment'
import eMath from 'exact-math'
const MongoClient = mongodb.MongoClient
const uri = ''
import cron from 'node-cron'



export class interface {

    async _connectToDatabase() {
        console.log('connecting to db')
        this.databaseClient = await MongoClient.connect(uri, { useUnifiedTopology: true });
        const db = this.databaseClient.db('crypto')
        this.pCollection = db.collection('positions')

    }
    _disconnectFromTheDatabase() {
        if (!!this.databaseClient) {
            console.log('disconnecting')
            this.databaseClient.close();
            this.databaseClient = undefined;
            this.pCollection = undefined;
        }

    }

}

