import {trends} from '@/lib/intelligence';export function GET(){return Response.json({items:trends,asOf:'2026-09-12'},{headers:{'Access-Control-Allow-Origin':'*'}})}
