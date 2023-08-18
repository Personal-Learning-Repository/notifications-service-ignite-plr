import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['equipped-pony-12968-us1-kafka.upstash.io:9092'],
                sasl: {
                  mechanism: 'scram-sha-256',
                  username: 'ZXF1aXBwZWQtcG9ueS0xMjk2OCQ_s3RHXrfM2K12EctSgySNldUAB2pdMD2ohBc',
                  password: '0TJhzQCNNDHACH4IP6_MtGMhLAwBQQy_qnGYRpVrZ9eY57q6xPGDF9_G6AEWl1mC0phy8A==',
                },
                ssl: true,
            },
        });
    }

    async onModuleDestroy() {
        await this.close();
    }
}