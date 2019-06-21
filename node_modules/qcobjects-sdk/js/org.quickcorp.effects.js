/**
 * QCObjects SDK 1.0
 * ________________
 *
 * Author: Jean Machuca <correojean@gmail.com>
 *
 * Cross Browser Javascript Framework for MVC Patterns
 * QuickCorp/QCObjects is licensed under the
 * GNU Lesser General Public License v3.0
 * [LICENSE] (https://github.com/QuickCorp/QCObjects/blob/master/LICENSE.txt)
 *
 * Permissions of this copyleft license are conditioned on making available
 * complete source code of licensed works and modifications under the same
 * license or the GNU GPLv3. Copyright and license notices must be preserved.
 * Contributors provide an express grant of patent rights. However, a larger
 * work using the licensed work through interfaces provided by the licensed
 * work may be distributed under different terms and without source code for
 * the larger work.
 *
 * Copyright (C) 2015 Jean Machuca,<correojean@gmail.com>
 *
 * Everyone is permitted to copy and distribute verbatim copies of this
 * license document, but changing it is not allowed.
*/
"use strict";
(function() {
  Package('org.quickcorp.tools.effects',[
    Class('Move',Effect,{
      apply: function (element, xfrom, yfrom, xto, yto){
        var dx = xto-xfrom;
        var dy = yto-yfrom;
        element.style.transform='translate('+xfrom+'px,'+yfrom+'px)';
        this.animate({
          duration: this.duration,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            logger.debug('animation progress: '+progress.toString());
            var y = yfrom + (progress*dy/100);
            var x = xfrom + (progress*dx/100);
            logger.debug('x: '+x.toString()+' y:'+y.toString());
            element.style.transform='translate('+x+'px,'+y+'px)';
          }
        });
      }
    }),
    Class('MoveXInFromRight',Move,{
      apply: function (element){
        _super_('Move','apply').call(this,element,element.width,0,0,0);
      }
    }),
    Class('MoveXInFromLeft',Move,{
      apply: function (element){
        _super_('Move','apply').call(this,element,-element.width,0,0,0);
      }
    }),
    Class('MoveYInFromBottom',Move,{
      apply: function (element){
        _super_('Move','apply').call(this,element,0,element.height,0,0);
      }
    }),
    Class('MoveYInFromTop',Move,{
      apply: function (element){
        _super_('Move','apply').call(this,element,0,-element.height,0,0);
      }
    }),
    Class('RotateX',Effect,{
      apply: function (element, angleFrom,angleTo){
        var da = angleTo-angleFrom;
        this.animate({
          duration: this.duration,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            logger.debug('animation progress: '+progress.toString());
            var angle = Math.round(angleFrom + (progress*da/100));
            logger.debug('angle: '+angle.toString());
            element.style.transform= 'rotate3d(1,0,0,'+angle.toString()+'deg)';
          }
        });
      }
    }),
    Class('RotateY',Effect,{
      apply: function (element, angleFrom,angleTo){
        var da = angleTo-angleFrom;
        this.animate({
          duration: this.duration,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            logger.debug('animation progress: '+progress.toString());
            var angle = Math.round(angleFrom + (progress*da/100));
            logger.debug('angle: '+angle.toString());
            element.style.transform= 'rotate3d(0,1,0,'+angle.toString()+'deg)';
          }
        });
      }
    }),
    Class('RotateZ',Effect,{
      apply: function (element, angleFrom,angleTo){
        var da = angleTo-angleFrom;
        this.animate({
          duration: this.duration,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            logger.debug('animation progress: '+progress.toString());
            var angle = Math.round(angleFrom + (progress*da/100));
            logger.debug('angle: '+angle.toString());
            element.style.transform= 'rotate3d(0,0,1,'+angle.toString()+'deg)';
          }
        });
      }
    }),
    Class('Rotate',Effect,{
      apply: function (element, angleFrom,angleTo){
        var da = angleTo-angleFrom;
        this.animate({
          duration: this.duration,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            logger.debug('animation progress: '+progress.toString());
            var angle = Math.round(angleFrom + (progress*da/100));
            logger.debug('angle: '+angle.toString());
            element.style.transform= 'rotate3d(1,1,1,'+angle.toString()+'deg)';
          }
        });
      }
    }),
    Class('Fade',Effect,{
      apply: function (element, alphaFrom,alphaTo){
        var da = alphaTo-alphaFrom;
        this.animate({
          duration: this.duration,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            logger.debug('animation progress: '+progress.toString());
            var alpha = alphaFrom + (progress*da/100);
            logger.debug('alpha: '+alpha.toString());
            element.style.opacity= alpha.toString();
          }
        });
      }
    }),
    Class('Radius',Effect,{
      apply: function (element, radiusFrom,radiusTo){
        var dr = radiusTo-radiusFrom;
        this.animate({
          duration: this.duration,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            logger.debug('animation progress: '+progress.toString());
            var radius = radiusFrom + (progress*dr/100);
            logger.debug('radius: '+radius.toString());
            element.style.borderRadius= radius.toString()+'px';
          }
        });
      }
    }),
    Class('Resize',Effect,{
      apply: function (element, scaleFrom,scaleTo){
        var ds = scaleTo-scaleFrom;
        this.animate({
          duration: this.duration,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            logger.debug('animation progress: '+progress.toString());
            var scale = scaleFrom + (progress*ds/100);
            logger.debug('resize: '+scale.toString());
            element.style.transformOrigin='center';
            element.style.transform= 'scale('+scale+','+scale+')';
          }
        });
      }
    }),
    Class('WipeLeft',Effect,{
      apply: function (element, scaleFrom,scaleTo){
        var ds = scaleTo-scaleFrom;
        this.animate({
          duration: this.duration,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            logger.debug('animation progress: '+progress.toString());
            var scale = scaleFrom + (progress*ds/100);
            logger.debug('wipe: '+scale.toString());
            element.style.transformOrigin='right';
            element.style.transform= 'scaleX('+scale+')';
          }
        });
      }
    }),
    Class('WipeRight',Effect,{
      apply: function (element, scaleFrom,scaleTo){
        var ds = scaleTo-scaleFrom;
        this.animate({
          duration: this.duration,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            logger.debug('animation progress: '+progress.toString());
            var scale = scaleFrom + (progress*ds/100);
            logger.debug('wipe: '+scale.toString());
            element.style.transformOrigin='left';
            element.style.transform= 'scaleX('+scale+')';
          }
        });
      }
    }),
    Class('WipeUp',Effect,{
      apply: function (element, scaleFrom,scaleTo){
        var ds = scaleTo-scaleFrom;
        this.animate({
          duration: this.duration,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            logger.debug('animation progress: '+progress.toString());
            var scale = scaleFrom + (progress*ds/100);
            logger.debug('wipe: '+scale.toString());
            element.style.transformOrigin='bottom';
            element.style.transform= 'scaleY('+scale+')';
          }
        });
      }
    }),
    Class('WipeDown',Effect,{
      apply: function (element, scaleFrom,scaleTo){
        var ds = scaleTo-scaleFrom;
        this.animate({
          duration: this.duration,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            logger.debug('animation progress: '+progress.toString());
            var scale = scaleFrom + (progress*ds/100);
            logger.debug('wipe: '+scale.toString());
            element.style.transformOrigin='top';
            element.style.transform= 'scaleY('+scale+')';
          }
        });
      }
    })
  ]);
}).call(null);
