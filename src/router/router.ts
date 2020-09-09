import {Router, Request, Response} from 'express';
import path = require('path');
import MylSQL from '../mysql/mysql';

const router = Router();

// router.get('/', (req: Request, res: Response)=>{
//     res.sendFile(path.join(__dirname,'..', 'public', 'index.html'));
// });

router.get('/heroes', (req:Request, res: Response) => {
    
    const query =`
        SELECT *
        FROM heroes
    `;

    MylSQL.ejecutaQuery(query, (err:any, heroes:Object[]) => {
        if(err){
            res.status(400).json({
                ok: false,
                error: err
            });
        }else {
            res.json({
                ok: true,
                heroes
            })
        }
    });
});

router.get('/heroes/:id', (req:Request, res: Response) => {
    
    const id = req.params.id;
    //nos ayuda a que no nos inyecten datos
    const scpedId = MylSQL.instance.conexion.escape(id);
    const query = `
    SELECT *
    FROM heroes
    WHERE id = ${scpedId}
    `;

    MylSQL.ejecutaQuery(query, (err:any, heroes:Object[]) => {
        if(err){
            res.status(400).json({
                ok:false,
                error: err
            });
        } else {
            res.json({
                ok:true,
                heroes: heroes[0]
            })
        }
    })
});

export default router;