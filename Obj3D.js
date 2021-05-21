function Obj3D_Creer (){
    //
    //  CrÃ©er renvoyer un nouvel objet vide
    //- - - - - - - - - - - - - - - - - - - - - - - - -
    var obj = new Object();             // allouer eb RAM un nouvel objet mou
        
        //--- Initialisation l'objet vide
        obj.tabSegments = new Array();   // Tab des segments
        obj.tabPoints = new Array();    // Tab des points
        obj.cx = 0;
        obj.cy = 0;
        obj.cz = 0;
    
            return obj;                 // Renvoi le nouvel l'objet
    }// -----------------------------------------------
    function Obj3D_DefPoint (obj, x, y, z){
    //
    //  Ajouter un point 3D a l'objet 3D
    //- - - - - - - - - - - - - - - - - - - - - - - - -
    var point = new Object();           // allouer eb RAM un nouvel objet mou
        point.x = x;                    // Initialise les points 3D
        point.y = y;
        point.z = z;
    
        obj.tabPoints.push (point);      // Ajoute au tab
    }// -----------------------------------------------
    function Obj3D_DefSegment (obj, n1, n2){
    //
    //  Ajouter un segment 3D a l'objet 3D
    //- - - - - - - - - - - - - - - - - - - - - - - - - 
    var couple = new Object();         // allouer eb RAM un nouvel objet mou
        couple.n1 = n1;                // Initialise les segment
        couple.n2 = n2;
    
        obj.tabSegments.push (couple);  // Ajoute au tab
    
    }// -----------------------------------------------
    function Obj3D_Draw (obj){
    //
    //  Afficher l'objet 3D
    //- - - - - - - - - - - - - - - - - - - - - - - - - 
        for ( var i=0 ; i < obj.tabPoints.length; i++ ){
            var point = obj.tabPoints[i];   // un point de l'obj
            lib3D_point(point.x, point.y, point.z, 'red');
        };
        for ( var i=0 ; i < obj.tabSegments.length; i++ ){
            var seg = obj.tabSegments[i];   // un segment de l'obj
            var n1 =  seg.n1;
            var n2 =  seg.n2;
            var p1 = obj.tabPoints[n1];
            var p2 = obj.tabPoints[n2];
            lib3D_segment (obj.cx+p1.x,obj.cz+p1.y,obj.cz+p1.z,  obj.cx+p2.x,obj.cy+p2.y,obj.cz+p2.z , 'orange');
            lib3D_point(obj.cx+p1.x,obj.cy+p1.y, obj.cz+p1.z, 'red');
            lib3D_point(obj.cx+p2.x,obj.cy+p2.y,obj.cz+p2.z, 'red');
        };
    }
    function Obj3D_Draw1 (obj){
        //
        //  Afficher l'objet 3D
        //- - - - - - - - - - - - - - - - - - - - - - - - - 
            for ( var i=0 ; i < obj.tabPoints.length; i++ ){
                var point = obj.tabPoints[i];   // un point de l'obj
                lib3D_point(0, point.y, point.z, 'red');
            };
            for ( var i=0 ; i < obj.tabSegments.length; i++ ){
                var seg = obj.tabSegments[i];   // un segment de l'obj
                var n1 =  seg.n1;
                var n2 =  seg.n2;
                var p1 = obj.tabPoints[n1];
                var p2 = obj.tabPoints[n2];
                lib3D_segment (0,p1.y,p1.z,  0,p2.y,p2.z , 'green');
                lib3D_point(0, p1.y, p1.z, 'red');
                lib3D_point(0, p2.y, p2.z, 'red');
            };
        }
        function Obj3D_Draw2 (obj){
            //
            //  Afficher l'objet 3D
            //- - - - - - - - - - - - - - - - - - - - - - - - - 
                for ( var i=0 ; i < obj.tabPoints.length; i++ ){
                    var point = obj.tabPoints[i];   // un point de l'obj
                    lib3D_point(point.x, 0, point.z, 'red');
                };
                for ( var i=0 ; i < obj.tabSegments.length; i++ ){
                    var seg = obj.tabSegments[i];   // un segment de l'obj
                    var n1 =  seg.n1;
                    var n2 =  seg.n2;
                    var p1 = obj.tabPoints[n1];
                    var p2 = obj.tabPoints[n2];
                    lib3D_segment (p1.x,0,p1.z,  p2.x,0,p2.z , 'blue');
                    lib3D_point(p1.x, 0, p1.z, 'red');
                    lib3D_point(p2.x, 0, p2.z, 'red');
                };
            }
            function Obj3D_Draw3 (obj){
                //
                //  Afficher l'objet 3D
                //- - - - - - - - - - - - - - - - - - - - - - - - - 
                    for ( var i=0 ; i < obj.tabPoints.length; i++ ){
                        var point = obj.tabPoints[i];   // un point de l'obj
                        lib3D_point(point.x, point.y, 0, 'red');
                    };
                    for ( var i=0 ; i < obj.tabSegments.length; i++ ){
                        var seg = obj.tabSegments[i];   // un segment de l'obj
                        var n1 =  seg.n1;
                        var n2 =  seg.n2;
                        var p1 = obj.tabPoints[n1];
                        var p2 = obj.tabPoints[n2];
                        lib3D_segment (p1.x,p1.y,0,  p2.x,p2.y,0 , 'red');
                        lib3D_point(p1.x, p1.y,0, 'red');
                        lib3D_point(p2.x, p2.y, 0, 'red');
                    };
                }
        function Obj3D_Translater(obj, dx, dy,dz){
            for (var i = 0 ; i < obj.tabPoints.length ; i++ ){
                var point = obj.tabPoints[i];
                obj.cx += dx ;
                obj.cy += dy ;
                obj.cz += dz ;
            }
        }
        function Obj3D_Pivoter(obj , angle, axe){
            //pivoter l'objet 3d
            for (var i = 0 ; i < obj.tabPoints.length ; i++ ){
                var point = obj.tabPoints[i]; //un point de l'objet
                var u1,v1;
                switch (axe){
                    case 'x': 
                    u1 = point.y;
                    v1 = point.z;
                    break;
                    case 'y':
                    u1 =  point.x;
                    v1 =  point.z;
                    break;
                    case 'z':
                    u1 =  point.x;
                    v1=   point.y;
                    break;
                }
                var u2 = u1*Math.cos(angle) + v1*Math.sin(angle);
                var v2 = -u1*Math.sin(angle) + v1*Math.cos(angle);

                switch (axe){
                    case 'x': 
                    point.y = u2;
                    point.z = v2;
                    break;
                    case 'y':
                    point.x = u2;
                    point.z = v2;
                    break;
                    case 'z':
                    point.x = u2;
                    point.y = v2;
                    break;
                }
            }

        }
        function Obj3D_PivoterZ(obj , angle, axe){

            for (var i = 0 ; i < obj.tabPoints.length ; i++ ){
                var point = obj.tabPoints[i]; //un point de l'objet
                var u1,v1;

                var cx = u1*Math.cos(angle) + v1*Math.sin(angle);
                var cy = -u1*Math.sin(angle) + v1*Math.cos(angle);

                obj.cx += u1 ;
                obj.cz += v1 ;


        }
    }